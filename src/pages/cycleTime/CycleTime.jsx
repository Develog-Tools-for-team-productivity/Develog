import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import {
  dateRangeAtom,
  stateFetchDateRangeAtom,
  lastFetchedDateRangeAtom,
  extendedStatsAtom,
  cycleTimeListDataAtom,
  statsAtom,
} from '../../stores/useStore';
import Header from '../../components/header/Header';
import TeamViewHeader from '../../components/header/TeamViewHeader';
import StateCard from '../../components/stateCard/StateCard';
import MainBoard from '../../components/board/MainBoard';
import CommonList from '../../components/list/CommonList';
import { useFetchCycleTimeData } from '../../utils/useFetchCycleTimeData';
import { HEADERS } from '../../constants/cycleTimeConstants';

import styles from '../../components/stateCard/stateCard.module.css';

const CycleTime = () => {
  const [stats, setStats] = useAtom(statsAtom);
  const [extendedStats, setExtendedStats] = useAtom(extendedStatsAtom);
  const [cycleTimeListData, setCycleTimeListData] = useAtom(
    cycleTimeListDataAtom
  );
  const [dateRange, setDateRange] = useAtom(dateRangeAtom);
  const [stateFetchDateRange, setStateFetchDateRange] = useAtom(
    stateFetchDateRangeAtom
  );
  const [lastFetchedDateRange, setLastFetchedDateRange] = useAtom(
    lastFetchedDateRangeAtom
  );
  const [error, setError] = useState(null);

  const location = useLocation();
  const { fetchCycleTimeData } = useFetchCycleTimeData();
  const cycleTimeStat = stats[1];

  useEffect(() => {
    const startDate = dateRange.startDate;
    const endDate = dateRange.endDate;

    setDateRange({
      startDate: startDate,
      endDate: endDate,
    });
  }, [location]);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchCycleTimeData(
        dateRange.startDate,
        dateRange.endDate
      );
      setStats(data.stats);
      setExtendedStats(data.extendedStats);
      setCycleTimeListData(data.cycleTimeListData);
      setError(null);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('데이터를 가져오는 중 오류가 발생했습니다.');
    }
  }, [dateRange, fetchCycleTimeData]);

  useEffect(() => {
    if (
      !stateFetchDateRange.startDate ||
      !stateFetchDateRange.endDate ||
      lastFetchedDateRange.startDate !== dateRange.startDate ||
      lastFetchedDateRange.endDate !== dateRange.endDate
    ) {
      fetchData();
      setStateFetchDateRange(dateRange);
    }
  }, [dateRange, fetchData]);

  const handleDateRangeChange = (startDate, endDate) => {
    setDateRange({ startDate, endDate });
  };

  return (
    <>
      <Header headerText="Cycle Time" />
      <div className={styles.teamViewContainer}>
        <TeamViewHeader
          dateSelect={true}
          onDateRangeChange={handleDateRangeChange}
        />
        <div className={styles.oneInsight}>
          <StateCard
            icon={cycleTimeStat?.icon}
            value={cycleTimeStat?.value}
            label={cycleTimeStat?.label}
            extendedStats={extendedStats}
          />
        </div>
      </div>
      <MainBoard boardTitle="Cycle Time by PullRequest">
        <CommonList headers={HEADERS} data={cycleTimeListData} />
      </MainBoard>
      {error && <div className={styles.error}>{error}</div>}
    </>
  );
};

export default CycleTime;
