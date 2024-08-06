import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import styles from './chart.module.css';

const LineChart = ({ chartTitle, chartData, chartLabel, chartColor }) => {
  const [options, setOptions] = useState({
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
        ticks: {
          callback: function (value) {
            return Math.round(value) + chartLabel;
          },
        },
      },
    },
  });

  useEffect(() => {
    const yAxisMaxValue = Math.max(
      ...chartData.datasets.flatMap(dataset => dataset.data)
    );
    const stepSize = Math.ceil(yAxisMaxValue / 6);
    const adjustedMaxValue = stepSize * 7;

    setOptions(prevOptions => ({
      ...prevOptions,
      scales: {
        ...prevOptions.scales,
        y: {
          max: adjustedMaxValue,
          ticks: {
            stepSize: stepSize,
            callback: function (value) {
              return Math.round(value) + chartLabel;
            },
          },
        },
      },
    }));
  }, [chartData, chartLabel]);

  const modifiedChartData = {
    ...chartData,
    datasets: chartData.datasets.map(dataset => ({
      ...dataset,
      lineTension: 0.4,
      pointRadius: 3,
      pointHoverRadius: 5,
      fill: true,
      borderColor: chartColor,
      backgroundColor: chartColor.replace('1)', '0.2)'),
    })),
  };

  return (
    <div className={styles.chartContainer}>
      <h4>
        {chartTitle} <span className={styles.chartInfo}></span>
      </h4>
      <Line data={modifiedChartData} options={options} />
    </div>
  );
};

export default LineChart;
