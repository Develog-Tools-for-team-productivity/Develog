import { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import 'chartjs-adapter-date-fns';

import styles from './chart.module.css';

const LineChart = ({ chartTitle, chartData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  useEffect(() => {
    return () => {
      if (window.Chart) {
        for (let id in window.Chart.instances) {
          window.Chart.instances[id].destroy();
        }
      }
    };
  }, []);

  return (
    <div className={styles.chartContainer}>
      <h4>
        {chartTitle} <span className={styles.chartInfo}></span>
      </h4>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
