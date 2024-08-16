import { useState, useEffect } from 'react';

import Header from '../../components/header/Header';
import TeamViewHeader from '../../components/header/TeamViewHeader';
import StateCard from '../../components/stateCard/StateCard';
import MainBoard from '../../components/board/MainBoard';
import CommonList from '../../components/list/CommonList';
import ProjectList from '../../components/list/ProjectList';

import styles from '../../components/stateCard/stateCard.module.css';

const ProjectDeliveryTracker = () => {
  const [isDefaultView, setIsDefaultView] = useState(true);
  const [projectsData, setProjectsData] = useState([]);
  const [projectsTotal, setProjectsTotal] = useState({
    totalProjects: 0,
    totalPeople: 0,
    labelSummary: [],
  });
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProjectHeaders, setSelectedProjectHeaders] = useState(null);
  const [sprint, setSprint] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjectData();
  }, []);

  const fetchProjectData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/projects`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('프로젝트 데이터 가져오기에 실패했습니다.');
      }

      const data = await response.json();

      setProjectsData(data.projectDeliveryData || []);
      setProjectsTotal(
        data.summaryData || {
          totalProjects: 0,
          totalPeople: 0,
          labelSummary: [],
        }
      );
      setSprint(data.iterationLabelRations);
    } catch (error) {
      console.error('프로젝트 데이터 받는 중 오류가 생겼습니다', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!projectsData || projectsData.length === 0) {
    return <div>프로젝트 데이터가 없습니다.</div>;
  }

  const cycleTimeData = projectsData.map(project => ({
    projects: project.projectName,
    activePeople: {
      icon: 'activePeople',
      value: project.teamSize,
      label: 'People',
    },
    investmentProfile: project.overallInvestmentProfile.items,
    delivery: {
      icon: 'delivery',
      value: `${project.planningAccuracy?.total || 0}%`,
      label: 'Planning Accuracy',
    },
  }));

  const projectData = projectsData.map(project => ({
    peopleEffort: {
      value: Math.ceil(
        (project.summaryData.activePeople / projectsTotal.totalPeople) * 100
      ),
      mostActive: project.mostActive || [],
      sprintsActivePeople: project.sprintActivity.map(sprint => ({
        ...sprint,
        activeIssuePercentage: Math.round(
          (sprint.activeIssuePeople / projectsTotal.totalPeople) * 100
        ),
      })),
    },
    investmentProfile: {
      total: project.overallInvestmentProfile.items.map(item => ({
        ...item,
        investmentProfilePercentage: parseFloat(item.percentage),
      })),
      totalCount: project.overallInvestmentProfile.totalCount,
      sprints: project.sprintInvestmentProfiles,
    },
    projectDelivery: project.projectDeliveryMetrics,
    planningAccuracy: {
      total: project.planningAccuracy?.total || 0,
      sprints: project.planningAccuracy?.sprints
        ? Object.fromEntries(
            project.planningAccuracy.sprints.map(sprint => [
              sprint.sprintName,
              {
                sprintName: sprint.sprintName,
                value: sprint.value,
              },
            ])
          )
        : {},
    },
  }));

  const stats = [
    { icon: 'projects', value: projectsTotal.totalProjects, label: 'Project' },
    { icon: 'people', value: projectsTotal.totalPeople, label: 'People' },
  ];

  const extendedStats = {
    investmentProfile: { items: projectsTotal.labelSummary },
  };

  const headers = ['Projects', '활동 인원', '프로젝트 주요 작업', '달성율'];

  const formattedProjectDate = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    return `${start.getFullYear()}.${start.getMonth() + 1}.${start.getDate()} - ${end.getFullYear()}.${end.getMonth() + 1}.${end.getDate()}`;
  };

  const projectHeadersData = projectsData.map(project => {
    const sprintObjects = project.sprintActivity.map(sprint => {
      const startDate = new Date(sprint.startDate);
      const endDate = new Date(sprint.endDate);

      const formattedStartDate = `${startDate.getMonth() + 1}.${startDate.getDate()}`;
      const formattedEndDate = `${endDate.getMonth() + 1}.${endDate.getDate()}`;

      return {
        [sprint.sprintName]: {
          sprintName: sprint.sprintName,
          date: `${formattedStartDate} - ${formattedEndDate}`,
        },
      };
    });

    const sprintData = Object.assign({}, ...sprintObjects);
    const projectDate = formattedProjectDate(
      project.sprintActivity[0]?.startDate,
      project.sprintActivity[project.sprintActivity.length - 1]?.endDate
    );

    return {
      projectDate: projectDate,
      blank1: '\u00A0',
      blank2: '\u00A0',
      ...sprintData,
    };
  });

  const handleProjectClick = projectIndex => {
    setSelectedProject(projectData[projectIndex]);
    setSelectedProjectHeaders(projectHeadersData[projectIndex]);
    setIsDefaultView(false);
  };

  return (
    <>
      <Header headerText="Project Delivery Tracker" />
      <div
        className={`${styles.teamViewContainer} ${styles.cycleTimeTeamView}`}
      >
        <TeamViewHeader dateSelect={false} />
        <div className={styles.insight}>
          {stats.map((stat, index) => (
            <StateCard
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              extendedStats={extendedStats}
            />
          ))}
        </div>
      </div>
      <MainBoard boardTitle="Project Delivery Tracker List">
        {isDefaultView ? (
          <CommonList
            headers={headers}
            data={cycleTimeData}
            page="ProjectDeliveryTracker"
            setState={handleProjectClick}
          />
        ) : (
          selectedProject && (
            <ProjectList
              headers={selectedProjectHeaders}
              data={selectedProject}
            />
          )
        )}
      </MainBoard>
    </>
  );
};

export default ProjectDeliveryTracker;
