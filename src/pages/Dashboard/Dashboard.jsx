import { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import TeamViewHeader from '../../components/header/TeamViewHeader';
import StateCard from '../../components/stateCard/StateCard';
import MainBoard from '../../components/board/MainBoard';
import DoraMetrics from '../../components/dorametrics/DoraMetrics';

import styles from '../../components/stateCard/stateCard.module.css';

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [extendedStats, setExtendedStats] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await fetch('http://localhost:5001/api/user-data', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('데이터 가져오기 실패');
        }

        const data = await response.json();
        setStats(data.stats);
        setExtendedStats(data.extendedStats);
      } catch (error) {
        console.error('데이터 가져오기 중 오류 발생:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <Header headerText="Dashboard" />
      <div className={styles.teamViewContainer}>
        <TeamViewHeader dateSelect={true} />
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
