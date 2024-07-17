import React from 'react';
import PieChart from '../chart/PieChart';
import styles from './stateCard.module.css';

const ExtendedStateCard = ({ icon, items }) => {
  if (icon === 'investmentProfile' || icon === 'people') {
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
      <div className={styles.extendedStateCard}>
        <div className={styles.pieChart}>
          <PieChart data={chartData} />
        </div>
        <div className={styles.items}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.value}>{item.value}</span>
              <div
                className={styles.bar}
                style={{
                  backgroundColor: chartData.datasets[0].backgroundColor[index],
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.extendedStateCard}>
      <div className={styles.items}>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <div key={index} className={styles.item}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.value}>{item.value}</span>
            </div>
            {icon === 'cycleTime' && index < items.length - 1 && (
              <div className={styles.teamViewArrow}></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ExtendedStateCard;
