import DateRangePicker from '../select/DateRangePicker';
import LineChart from '../chart/LineChart';
import styles from './dorametrics.module.css';

const DoraMetrics = () => {
  const cycleTimeData = {
    labels: [
      new Date(2023, 9, 4),
      new Date(2023, 9, 5),
      new Date(2023, 9, 6),
      new Date(2023, 9, 7),
      new Date(2023, 9, 8),
      new Date(2023, 9, 9),
      new Date(2023, 9, 10),
      new Date(2023, 9, 11),
      new Date(2023, 9, 12),
      new Date(2023, 9, 13),
    ],
    datasets: [
      {
        label: 'Cycle Time',
        data: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div>
      <DateRangePicker />
      <div className={styles.chartWrap}>
        <LineChart chartTitle="CYCLE TIME" chartData={cycleTimeData} />
        <LineChart chartTitle="DEPLOY FREQUENCY" chartData={cycleTimeData} />
        <LineChart chartTitle="MTTR" chartData={cycleTimeData} />
        <LineChart chartTitle="CFR" chartData={cycleTimeData} />
      </div>
    </div>
  );
};

export default DoraMetrics;
