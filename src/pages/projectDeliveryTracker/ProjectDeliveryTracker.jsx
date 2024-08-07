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
  const [sprint, setSprint] = useState([]);

  useEffect(() => {
    fetchProjectData();
  }, []);

  const fetchProjectData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/projects`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      if (!response.ok)
        throw new Error('프로젝트 데이터 가져오기에 실패했습니다.');
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
    }
  };

  if (!projectsData || projectsData.length === 0) {
    return <div>Loading...</div>;
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
      value: `${project.planningAccuracy ? project.planningAccuracy.overall : 0}%`,
      label: 'Planning Accuracy',
    },
  }));

  const createSprintData = sprintData => {
    if (!sprintData || !Array.isArray(sprintData)) {
      return {};
    }

    const sprintMap = {};
    sprintData.forEach((sprint, index) => {
      sprintMap[`sprint${index + 1}`] = sprint.labelRatios.map(labelRatio => ({
        label: labelRatio.label,
        value: parseFloat(labelRatio.ratio),
      }));
    });
    return sprintMap;
  };

  const projectData = projectsData.map(project => ({
    peopleEffort: {
      value: Math.ceil((project.summaryData.activePeople / 3) * 100),
      mostActive: project.topContributors
        ? project.topContributors.map(contributor => ({
            name: contributor.name,
            active: contributor.count,
          }))
        : [],
    },
    investmentProfile: {
      total: project.overallInvestmentProfile.items,
      sprints: sprint ? createSprintData(sprint) : {},
    },
    projectDelivery: project.projectDeliveryMetrics
      ? {
          total: [
            { label: 'Added', value: 6 },
            { label: 'Complete', value: 12 },
            { label: 'Carryover', value: 0 },
          ],
          sprints: {
            sprint1: [
              { label: 'Added', value: 2 },
              { label: 'Complete', value: 6 },
              { label: 'Carryover', value: 0 },
            ],
            sprint2: [
              { label: 'Added', value: 2 },
              { label: 'Complete', value: 3 },
              { label: 'Carryover', value: 0 },
            ],
            sprint3: [
              { label: 'Added', value: 2 },
              { label: 'Complete', value: 2 },
              { label: 'Carryover', value: 0 },
            ],
            sprint4: [
              { label: 'Added', value: 0 },
              { label: 'Complete', value: 1 },
              { label: 'Carryover', value: 0 },
            ],
          },
        }
      : { total: [], sprints: {} },
    planningAccuracy: {
      total: project.planningAccuracy ? project.planningAccuracy.overall : 0,
      sprints: {
        sprint1: { sprintName: 'sprint1', value: 50 },
        sprint2: { sprintName: 'sprint2', value: 20 },
        sprint3: { sprintName: 'sprint3', value: 5 },
        sprint4: { sprintName: 'sprint4', value: 5 },
      },
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

  const projectHeaders = {
    projectDate: '2024. 07. 14 - 2024. 07. 30',
    blank1: '\u00A0',
    blank2: '\u00A0',
    sprint1: { sprintName: 'sprint1', date: '07. 14 - 07. 17', value: 34 },
    sprint2: { sprintName: 'sprint2', date: '07. 18 - 07. 21', value: 34 },
    sprint3: { sprintName: 'sprint3', date: '07. 22 - 07. 25', value: 34 },
    sprint4: { sprintName: 'sprint4', date: '07. 26 - 07. 30', value: 34 },
  };

  const handleProjectClick = projectIndex => {
    setSelectedProject(projectData[projectIndex]);
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
            <ProjectList headers={projectHeaders} data={selectedProject} />
          )
        )}
      </MainBoard>
    </>
  );
};

export default ProjectDeliveryTracker;
