import Header from '../../components/header/Header';
import TeamViewHeader from '../../components/header/TeamViewHeader';
import StateCard from '../../components/stateCard/StateCard';
import MainBoard from '../../components/board/MainBoard';
import CommonList from '../../components/list/CommonList';

import styles from '../../components/stateCard/stateCard.module.css';

const CycleTime = () => {
  const stats = [
    {
      icon: 'cycleTime',
      value: '12d 1h',
      label: 'Cycle Time',
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
  };

  const headers = [
    'Pull Request',
    'Contributors',
    'Repositories',
    'Cycle Time',
    'Coding Time',
    'PickUp',
    'Review',
    'Deploy',
    'Commits',
    'PR Size',
  ];

  const cycleTimeData = [
    {
      pullRequest: 'Feat#119 save pr actual size along stats',
      contributors: 'origami',
      repositories: 'origami',
      cycleTime: '12d',
      codingTime: '4d',
      pickUp: '21h',
      review: '3d',
      deploy: '1h',
      commits: 54,
      prSize: 81,
    },
    {
      pullRequest: 'Feat#119 save pr actual size along stats',
      contributors: 'origami',
      repositories: 'origami',
      cycleTime: '12d',
      codingTime: '4d',
      pickUp: '21h',
      review: '3d',
      deploy: '1h',
      commits: 54,
      prSize: 81,
    },
    {
      pullRequest: 'Feat#119 save pr actual size along stats',
      contributors: 'origami',
      repositories: 'origami',
      cycleTime: '12d',
      codingTime: '4d',
      pickUp: '21h',
      review: '3d',
      deploy: '1h',
      commits: 54,
      prSize: 81,
    },
    {
      pullRequest: 'Feat#119 save pr actual size along stats',
      contributors: 'origami',
      repositories: 'origami',
      cycleTime: '12d',
      codingTime: '4d',
      pickUp: '21h',
      review: '3d',
      deploy: '1h',
      commits: 54,
      prSize: 81,
    },
    {
      pullRequest: 'Feat#119 save pr actual size along stats',
      contributors: 'origami',
      repositories: 'origami',
      cycleTime: '12d',
      codingTime: '4d',
      pickUp: '21h',
      review: '3d',
      deploy: '1h',
      commits: 54,
      prSize: 81,
    },
    {
      pullRequest: 'Feat#119 save pr actual size along stats',
      contributors: 'origami',
      repositories: 'origami',
      cycleTime: '12d',
      codingTime: '4d',
      pickUp: '21h',
      review: '3d',
      deploy: '1h',
      commits: 54,
      prSize: 81,
    },
    {
      pullRequest: 'Feat#119 save pr actual size along stats',
      contributors: 'origami',
      repositories: 'origami',
      cycleTime: '12d',
      codingTime: '4d',
      pickUp: '21h',
      review: '3d',
      deploy: '1h',
      commits: 54,
      prSize: 81,
    },
    {
      pullRequest: 'Feat#119 save pr actual size along stats',
      contributors: 'origami',
      repositories: 'origami',
      cycleTime: '12d',
      codingTime: '4d',
      pickUp: '21h',
      review: '3d',
      deploy: '1h',
      commits: 54,
      prSize: 81,
    },
  ];

  return (
    <>
      <Header headerText="Cycle Time" />
      <div
        className={`${styles.teamViewContainer} ${styles.cycleTimeTeamView}`}
      >
        <TeamViewHeader />
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
      <MainBoard boardTitle="Cycle Time by PullRequest">
        <CommonList headers={headers} data={cycleTimeData} />
      </MainBoard>
    </>
  );
};

export default CycleTime;
