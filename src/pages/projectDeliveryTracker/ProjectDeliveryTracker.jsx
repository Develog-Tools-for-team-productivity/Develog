import { useState } from 'react';
import Header from '../../components/header/Header';
import TeamViewHeader from '../../components/header/TeamViewHeader';
import StateCard from '../../components/stateCard/StateCard';
import MainBoard from '../../components/board/MainBoard';
import CommonList from '../../components/list/CommonList';
import ProjectList from '../../components/list/ProjectList';

import styles from '../../components/stateCard/stateCard.module.css';

const ProjectDeliveryTracker = () => {
  const [isDefaultView, setIsDefaultView] = useState(true);

  const stats = [
    {
      icon: 'projects',
      value: '4',
      label: 'Project',
    },
    {
      icon: 'people',
      value: '22',
      label: 'People',
    },
  ];

  const extendedStats = {
    investmentProfile: {
      items: [
        { value: 18, label: 'Functional Stories' },
        { value: 32, label: 'Non-Functional Stories' },
        { value: 50, label: 'Bugs' },
        { value: 12, label: 'Others' },
      ],
    },
  };

  const headers = [
    'Projects',
    'Active people',
    'Investment Profile',
    'Delivery',
  ];

  const projectHeaders = {
    projectDate: '2024. 04. 15 - 2024. 06. 10',
    blank1: '\u00A0',
    blank2: '\u00A0',
    sprint1: { sprintName: 'sprint1', date: '04. 15 - 04. 30', value: 20 },
    sprint2: { sprintName: 'sprint2', date: '04. 15 - 04. 30', value: 60 },
    sprint3: { sprintName: 'sprint3', date: '04. 15 - 04. 30', value: 90 },
    sprint4: { sprintName: 'sprint4', date: '04. 15 - 04. 30', value: 40 },
  };

  const cycleTimeData = [
    {
      projects: 'Project XYZ',
      activePeople: {
        icon: 'activePeople',
        value: '22',
        label: 'People',
      },
      investmentProfile: [
        { label: 'Functional Stories', value: 55 },
        { label: 'Non-Functional Stories', value: 25 },
        { label: 'Bugs', value: 15 },
        { label: 'Others', value: 5 },
      ],
      delivery: {
        icon: 'delivery',
        value: '62%',
        label: 'Planning Accuracy',
      },
    },
    {
      projects: 'Project XYZ',
      activePeople: {
        icon: 'activePeople',
        value: '22',
        label: 'People',
      },
      investmentProfile: [
        { label: 'Functional Stories', value: 55 },
        { label: 'Non-Functional Stories', value: 25 },
        { label: 'Bugs', value: 15 },
        { label: 'Others', value: 5 },
      ],
      delivery: {
        icon: 'delivery',
        value: '62%',
        label: 'Planning Accuracy',
      },
    },
  ];

  const projectData = {
    peopleEffort: {
      value: 64,
      mostActive: [
        {
          name: 'Sarah Scott',
          active: 120,
        },
        {
          name: 'Sarah Scott',
          active: 120,
        },
      ],
    },
    investmentProfile: {
      total: [
        { label: 'Functional Stories', value: 55 },
        { label: 'Non-Functional Stories', value: 25 },
        { label: 'Bugs', value: 15 },
        { label: 'Others', value: 5 },
      ],
      sprints: {
        sprint1: [
          { label: 'Functional Stories', value: 15 },
          { label: 'Non-Functional Stories', value: 25 },
          { label: 'Bugs', value: 35 },
          { label: 'Others', value: 25 },
        ],
        sprint2: [
          { label: 'Functional Stories', value: 25 },
          { label: 'Non-Functional Stories', value: 25 },
          { label: 'Bugs', value: 35 },
          { label: 'Others', value: 15 },
        ],
        sprint3: [
          { label: 'Functional Stories', value: 35 },
          { label: 'Non-Functional Stories', value: 25 },
          { label: 'Bugs', value: 15 },
          { label: 'Others', value: 25 },
        ],
        sprint4: [
          { label: 'Functional Stories', value: 25 },
          { label: 'Non-Functional Stories', value: 45 },
          { label: 'Bugs', value: 15 },
          { label: 'Others', value: 15 },
        ],
      },
    },
    projectDelivery: {
      total: [
        { label: 'Added', value: 6 },
        { label: 'Complete', value: 9 },
        { label: 'Carryover', value: 2 },
      ],
      sprints: {
        sprint1: [
          { label: 'Added', value: 6 },
          { label: 'Complete', value: 15 },
          { label: 'Carryover', value: 2 },
        ],
        sprint2: [
          { label: 'Added', value: 6 },
          { label: 'Complete', value: 9 },
          { label: 'Carryover', value: 19 },
        ],
        sprint3: [
          { label: 'Added', value: 14 },
          { label: 'Complete', value: 9 },
          { label: 'Carryover', value: 2 },
        ],
        sprint4: [
          { label: 'Added', value: 6 },
          { label: 'Complete', value: 20 },
          { label: 'Carryover', value: 2 },
        ],
      },
    },
    planningAccuracy: {
      total: 62,
      sprints: {
        sprint1: { sprintName: 'sprint1', value: 20 },
        sprint2: { sprintName: 'sprint2', value: 60 },
        sprint3: { sprintName: 'sprint3', value: 90 },
        sprint4: { sprintName: 'sprint4', value: 40 },
      },
    },
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
            setState={setIsDefaultView}
          />
        ) : (
          <ProjectList headers={projectHeaders} data={projectData} />
        )}
      </MainBoard>
    </>
  );
};

export default ProjectDeliveryTracker;
