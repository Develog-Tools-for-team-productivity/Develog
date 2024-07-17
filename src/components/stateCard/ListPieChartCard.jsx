import React from 'react';
import PieChart from '../chart/PieChart';
import styles from './stateCard.module.css';

const ListPieChartCard = ({ items }) => {
  console.log(items);
  const chartData = {
    labels: items.map(item => item.label),
    datasets: [
      {
        data: items.map(item => item.value),
        backgroundColor: ['#647AE4', '#F28F45', '#E7595A', '#5BAF69'],
        hoverBackgroundColor: ['#647AE4', '#F28F45', '#E7595A', '#5BAF69'],
      },
    ],
  };

  return (
    <div className={styles.investmentWrap}>
      <div className={styles.pieChart}>
        <PieChart data={chartData} />
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={styles.pieChartColorWrap}>
            <span
              className={styles.pieChartColor}
              style={{
                backgroundColor: chartData.datasets[0].backgroundColor[index],
              }}
            ></span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListPieChartCard;
