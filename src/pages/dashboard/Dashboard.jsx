import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import {
  dateRangeAtom,
  statsAtom,
  extendedStatsAtom,
  lastFetchedDateRangeAtom,
  stateFetchDateRangeAtom,
} from '../../stores/useStore';
import { fetchDateData } from '../../utils/api';

import Header from '../../components/header/Header';
import TeamViewHeader from '../../components/header/TeamViewHeader';
import StateCard from '../../components/stateCard/StateCard';
import MainBoard from '../../components/board/MainBoard';
import DoraMetrics from '../../components/dorametrics/DoraMetrics';

import styles from '../../components/stateCard/stateCard.module.css';

const Dashboard = () => {
  const [stats, setStats] = useAtom(statsAtom);
  const [extendedStats, setExtendedStats] = useAtom(extendedStatsAtom);
  const [dateRange, setDateRange] = useAtom(dateRangeAtom);
  const [lastFetchedDateRange, setLastFetchedDateRange] = useAtom(
    lastFetchedDateRangeAtom
  );
  const [stateFetchDateRange, setStateFetchDateRange] = useAtom(
    stateFetchDateRangeAtom
  );
  const location = useLocation();

  useEffect(() => {
    const startDate = dateRange.startDate;
    const endDate = dateRange.endDate;

    setDateRange({
      startDate: startDate,
      endDate: endDate,
    });
  }, [location]);

  const fetchUserData = async (startDate, endDate) => {
    try {
      const data = await fetchDateData(startDate, endDate);
      setStats(data.stats);
      setExtendedStats(data.extendedStats);
      setLastFetchedDateRange({ startDate, endDate });
    } catch (error) {
      console.error('데이터 가져오기 중 오류 발생:', error);
    }
  };

  const handleDateRangeChange = (startDate, endDate) => {
    if (startDate) fetchUserData(startDate, endDate);
  };

  const isDateRangeChanged = (lastDate, currentDate) => {
    return (
      !lastDate.startDate ||
      !lastDate.endDate ||
      lastDate.startDate !== currentDate.startDate ||
      lastDate.endDate !== currentDate.endDate
    );
  };

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const isLastFetchedDateRangeChanged = isDateRangeChanged(
        lastFetchedDateRange,
        dateRange
      );
      const isStateFetchDateRangeChanged = isDateRangeChanged(
        stateFetchDateRange,
        lastFetchedDateRange
      );

      if (isLastFetchedDateRangeChanged && isStateFetchDateRangeChanged) {
        fetchUserData(dateRange.startDate, dateRange.endDate);
      }
    }
  }, [dateRange, lastFetchedDateRange, stateFetchDateRange]);

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
