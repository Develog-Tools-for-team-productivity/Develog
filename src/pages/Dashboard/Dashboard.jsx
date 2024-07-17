import Header from '../../components/header/Header';
import TeamViewHeader from '../../components/header/TeamViewHeader';
import StateCard from '../../components/stateCard/StateCard';
import MainBoard from '../../components/board/MainBoard';
import DoraMetrics from '../../components/dorametrics/DoraMetrics';

import styles from '../../components/stateCard/stateCard.module.css';

const Dashboard = () => {
  const stats = [
    {
      icon: 'gitCommit',
      value: 110,
      label: 'Git Commit',
    },
    {
      icon: 'cycleTime',
      value: '12d 1h',
      label: 'Cycle Time',
    },
    {
      icon: 'gitContributors',
      value: 4,
      label: 'Git Contributors',
    },
    {
      icon: 'investmentProfile',
      value: 4,
      label: 'Investment Profile',
    },
  ];

  const extendedStats = {
    cycleTime: {
      items: [
        { value: '16 hour', label: 'Coding' },
        { value: '2 days', label: 'PickUp' },
        { value: '7 hour', label: 'Review' },
        { value: '90 min', label: 'Deploy' },
      ],
    },
    investmentProfile: {
      items: [
        { value: 18, label: 'Functional Stories' },
        { value: 32, label: 'Non-Functional Stories' },
        { value: 50, label: 'Bugs' },
        { value: 12, label: 'Others' },
      ],
    },
  };

  return (
    <>
      <Header headerText="Dashboard" />
      <div className={styles.teamViewContainer}>
        <TeamViewHeader />
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
      <MainBoard boardTitle="DORA Metrics">
        <DoraMetrics />
      </MainBoard>
    </>
  );
};

export default Dashboard;
