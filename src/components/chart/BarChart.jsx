import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: false,
        stacked: true,
      },
      y: {
        display: false,
        stacked: true,
        max: 100,
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
      },
    },
  };

  const barChartData = {
    ...data,
    datasets: data.datasets.map(dataset => ({
      ...dataset,
      barThickness: 10,
      borderRadius: {
        topLeft: 10,
        topRight: 10,
        bottomLeft: 10,
        bottomRight: 10,
      },
      borderSkipped: false,
    })),
  };

  return <Bar data={barChartData} options={options} />;
};

export default BarChart;
