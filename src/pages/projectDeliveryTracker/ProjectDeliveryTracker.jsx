import Header from '../../components/header/Header';
import TeamViewHeader from '../../components/header/TeamViewHeader';
import StateCard from '../../components/stateCard/StateCard';
import MainBoard from '../../components/board/MainBoard';
import CommonList from '../../components/list/CommonList';

import styles from '../../components/stateCard/stateCard.module.css';

const ProjectDeliveryTracker = () => {
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
        <CommonList headers={headers} data={cycleTimeData} />
      </MainBoard>
    </>
  );
};

export default ProjectDeliveryTracker;
