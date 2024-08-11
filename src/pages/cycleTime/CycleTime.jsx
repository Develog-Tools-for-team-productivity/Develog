import { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { dateRangeAtom } from '../../stores/useStore';
import Header from '../../components/header/Header';
import TeamViewHeader from '../../components/header/TeamViewHeader';
import StateCard from '../../components/stateCard/StateCard';
import MainBoard from '../../components/board/MainBoard';
import CommonList from '../../components/list/CommonList';
import { useFetchCycleTimeData } from '../../utils/useFetchCycleTimeData';
import { HEADERS } from '../../constants/cycleTimeConstants';

import styles from '../../components/stateCard/stateCard.module.css';

const CycleTime = () => {
  const [stats, setStats] = useState({});
  const [extendedStats, setExtendedStats] = useState({});
  const [cycleTimeListData, setCycleTimeListData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState('average');
  const [selectedRepositories, setSelectedRepositories] = useState([]);
  const [dateRange, setDateRange] = useAtom(dateRangeAtom);
  const [error, setError] = useState(null);

  const location = useLocation();
  const { fetchCycleTimeData } = useFetchCycleTimeData();

  useEffect(() => {
    const endDate = new Date();
    const startDate = new Date(endDate);
    startDate.setDate(startDate.getDate() - 10);

    setDateRange({
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0],
    });
  }, [location]);

  const fetchData = useCallback(async () => {
    try {
      const data = await fetchCycleTimeData(
        dateRange.startDate,
        dateRange.endDate
      );
      setStats(data.stats[1]);
      setExtendedStats(data.extendedStats);
      setCycleTimeListData(data.cycleTimeListData);
      setSelectedRepositories(data.selectedRepositories);
      filterData(data.cycleTimeListData, selectedRepo);
      setError(null);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError('데이터를 가져오는 중 오류가 발생했습니다.');
    }
  }, [dateRange, selectedRepo, fetchCycleTimeData]);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      fetchData();
    }
  }, [dateRange, fetchData]);

  const handleDateRangeChange = (startDate, endDate) => {
    setDateRange({ startDate, endDate });
  };

  const handleRepoSelect = repoId => {
    setSelectedRepo(repoId);
    filterData(cycleTimeListData, repoId);
  };

  const filterData = (data, repoId) => {
    const filtered =
      repoId === 'average'
        ? data
        : data.filter(item => item.repositories === repoId);
    setFilteredData(filtered);
  };

  return (
    <>
      <Header headerText="Cycle Time" />
      <div className={styles.teamViewContainer}>
        <TeamViewHeader
          dateSelect={true}
          onDateRangeChange={handleDateRangeChange}
          options={[
            { id: 'average', name: 'All Repositories' },
            ...selectedRepositories.map(repo => ({
              id: repo.id,
              name: repo.name,
            })),
          ]}
          onRepoSelect={handleRepoSelect}
        />
        <div className={styles.oneInsight}>
          <StateCard
            icon={stats.icon}
            value={stats.value}
            label={stats.label}
            extendedStats={extendedStats}
          />
        </div>
      </div>
      <MainBoard boardTitle="Cycle Time by PullRequest">
        <CommonList headers={HEADERS} data={filteredData} />
      </MainBoard>
      {error && <div className={styles.error}>{error}</div>}
    </>
  );
};

export default CycleTime;
