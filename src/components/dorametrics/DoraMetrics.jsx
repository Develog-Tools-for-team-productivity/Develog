import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { selectedRepoAtom } from '../../stores/useStore';
import SelectBox from '../select/SelectBox';
import LineChart from '../chart/LineChart';
import styles from './dorametrics.module.css';

const DoraMetrics = ({ dateRange }) => {
  const [cycleTimeData, setCycleTimeData] = useState({});
  const [deployFrequencyData, setDeployFrequencyData] = useState({});
  const [mttrData, setMttrData] = useState({});
  const [cfrData, setCfrData] = useState({});
  const [selectedRepositories, setSelectedRepositories] = useState([]);
  const [selectedRepo, setSelectedRepo] = useAtom(selectedRepoAtom);
  const [isLoading, setIsLoading] = useState(true);
  const [averages, setAverages] = useState({
    cycleTime: 0,
    deployFrequency: 0,
    mttr: 0,
    cfr: 0,
  });
  const [totalDays, setTotalDays] = useState(0);

  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      fetchDoraMetrics();
    }
  }, [dateRange]);

  const fetchDoraMetrics = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/dora-metrics?startDate=${dateRange.startDate}&endDate=${dateRange.endDate}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      if (!response.ok) throw new Error('Failed to fetch DORA metrics');
      const data = await response.json();
      setCycleTimeData(
        data.cycleTimeData.data || { average: { labels: [], datasets: [] } }
      );
      setDeployFrequencyData(
        data.deployFrequencyData.data || {
          average: { labels: [], datasets: [] },
        }
      );
      setMttrData(
        data.mttrData.data || { average: { labels: [], datasets: [] } }
      );
      setCfrData(
        data.cfrData.data || { average: { labels: [], datasets: [] } }
      );
      setSelectedRepositories(data.selectedRepositories || []);
      setAverages({
        cycleTime: data.cycleTimeData.average.average || 0,
        deployFrequency: data.deployFrequencyData.average.average || 0,
        mttr: data.mttrData.average.average || 0,
        cfr: data.cfrData.average.average || 0,
      });
      setTotalDays(data.deployFrequencyData.totalDays || 0);
    } catch (error) {
      console.error('Error fetching DORA metrics:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRepoSelect = repoId => {
    setSelectedRepo(repoId);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const options = [
    { id: 'average', name: 'Average' },
    ...selectedRepositories.map(repo => ({
      id: repo.id,
      name: repo.name,
    })),
  ];

  const cycleTimeChartData = cycleTimeData[selectedRepo] || {
    labels: [],
    datasets: [],
  };
  const deployFrequencyChartData = deployFrequencyData[selectedRepo] || {
    labels: [],
    datasets: [],
  };
  const mttrChartData = mttrData[selectedRepo] || { labels: [], datasets: [] };
  const cfrChartData = cfrData[selectedRepo] || { labels: [], datasets: [] };

  return (
    <div>
      <SelectBox
        options={options}
        defaultText="레포지토리를 선택해주세요"
        onChange={handleRepoSelect}
        value={selectedRepo}
        board={true}
      />
      <div className={styles.chartWrap}>
        <LineChart
          chartTitle="개발 주기 시간"
          chartData={cycleTimeChartData}
          chartLabel="시간"
          chartColor={getChartColor('CYCLE TIME', averages.cycleTime)}
        />
        <LineChart
          chartTitle="배포 빈도"
          chartData={deployFrequencyChartData}
          chartLabel=""
          chartColor={getChartColor(
            'DEPLOY FREQUENCY',
            averages.deployFrequency
          )}
          totalDays={totalDays}
        />
        <LineChart
          chartTitle="평균 복구시간"
          chartData={mttrChartData}
          chartLabel="시간"
          chartColor={getChartColor('MTTR', averages.mttr)}
        />
        <LineChart
          chartTitle="변경 실패율"
          chartData={cfrChartData}
          chartLabel="%"
          chartColor={getChartColor('CFR', averages.cfr)}
        />
      </div>
    </div>
  );
};

export default DoraMetrics;

const getChartColor = (metric, average) => {
  switch (metric) {
    case 'CYCLE TIME':
      if (average < 73) return 'rgb(75, 192, 151, 1)';
      if (average < 155) return 'rgba(54, 162, 235, 1)';
      if (average < 304) return 'rgba(255, 206, 86, 1)';
      return 'rgba(255, 99, 132, 1)';
    case 'DEPLOY FREQUENCY':
      if (average > 1) return 'rgba(75, 192, 192, 1)';
      if (average > 0.5) return 'rgba(54, 162, 235, 1)';
      if (average > 0.2) return 'rgba(255, 206, 86, 1)';
      return 'rgba(255, 99, 132, 1)';
    case 'MTTR':
      if (average < 7) return 'rgba(75, 192, 192, 1)';
      if (average < 9) return 'rgba(54, 162, 235, 1)';
      if (average < 10) return 'rgba(255, 206, 86, 1)';
      return 'rgba(255, 99, 132, 1)';
    case 'CFR':
      if (average < 1) return 'rgba(75, 192, 192, 1)';
      if (average < 8) return 'rgba(54, 162, 235, 1)';
      if (average < 39) return 'rgba(255, 206, 86, 1)';
      return 'rgba(255, 99, 132, 1)';
    default:
      return 'rgba(75, 192, 192, 1)';
  }
};
