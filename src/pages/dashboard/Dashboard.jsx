import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { dateRangeAtom } from '../../stores/useStore';
import { fetchDateData } from '../../utils/api';

import Header from '../../components/header/Header';
import TeamViewHeader from '../../components/header/TeamViewHeader';
import StateCard from '../../components/stateCard/StateCard';
import MainBoard from '../../components/board/MainBoard';
import DoraMetrics from '../../components/dorametrics/DoraMetrics';

import styles from '../../components/stateCard/stateCard.module.css';

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [extendedStats, setExtendedStats] = useState({});
  const [dateRange, setDateRange] = useAtom(dateRangeAtom);
  const location = useLocation();

  useEffect(() => {
    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 10);

    setDateRange({
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
    });
  }, [location]);

  const fetchUserData = async (startDate, endDate) => {
    try {
      const data = await fetchDateData(startDate, endDate);
      setStats(data.stats);
      setExtendedStats(data.extendedStats);
    } catch (error) {
      console.error('데이터 가져오기 중 오류 발생:', error);
    }
  };

  const handleDateRangeChange = (startDate, endDate) => {
    fetchUserData(startDate, endDate);
  };

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      fetchUserData(dateRange.startDate, dateRange.endDate);
    }
  }, [dateRange]);

  return (
    <>
      <Header headerText="Dashboard" />
      <div className={styles.teamViewContainer}>
        <TeamViewHeader
          dateSelect={true}
          onDateRangeChange={handleDateRangeChange}
        />
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
        <DoraMetrics dateRange={dateRange} />
      </MainBoard>
    </>
  );
};

export default Dashboard;
