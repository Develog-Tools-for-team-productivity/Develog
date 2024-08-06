import React from 'react';
import PieChart from '../chart/PieChart';
import styles from './stateCard.module.css';

function convertToHours(timeString) {
  const [time, unit] = timeString.split(' ');
  const numericTime = parseFloat(time);

  const unitConversion = {
    min: numericTime / 60,
    hour: numericTime,
    hours: numericTime,
    d: numericTime * 24,
    days: numericTime * 24,
  };

  return unitConversion[unit] || numericTime;
}

function determineStatusColor(label, timeString) {
  const hours = convertToHours(timeString);
  const thresholds = {
    Coding: [19, 44, 99],
    'PR 대기 시간': [7, 13, 24],
    '코드 리뷰': [5, 14, 29],
    배포: [6, 50, 137],
  };

  const [green, blue, yellow] = thresholds[label] || [];

  if (hours < green) return 'green';
  if (hours < blue) return 'blue';
  if (hours < yellow) return 'yellow';
  return 'red';
}

function renderItems(items, icon) {
  const chartColors = ['#647AE4', '#F28F45', '#E7595A', '#5BAF69'];

  return items.map((item, index) => (
    <React.Fragment key={index}>
      <div className={styles.item}>
        <span className={styles.label}>{item.label}</span>
        <span className={styles.value}>{item.value}</span>
        {icon === 'investmentProfile' && (
          <div
            className={styles.bar}
            style={{
              backgroundColor: chartColors[index % chartColors.length],
            }}
          ></div>
        )}
        {['Coding', 'PR 대기 시간', '코드 리뷰', '배포'].includes(
          item.label
        ) && (
          <span
            className={`${styles.mark} ${styles[determineStatusColor(item.label, item.value)]}`}
          ></span>
        )}
      </div>
      {icon === 'cycleTime' && index < items.length - 1 && (
        <div className={styles.teamViewArrow}></div>
      )}
    </React.Fragment>
  ));
}

function renderPieChart(items) {
  const chartData = {
    labels: items.map(item => item.label),
    datasets: [
      {
        data: items.map(item => item.value),
        backgroundColor: ['#647AE4', '#F28F45', '#E7595A', '#5BAF69'],
      },
    ],
  };

  return (
    <div className={styles.pieChart}>
      <PieChart data={chartData} />
    </div>
  );
}

const ExtendedStateCard = ({ icon, items = [] }) => {
  if (items.length === 0) {
    return <div className={styles.extendedStateCard}>Loading...</div>;
  }

  const showPieChart = icon === 'investmentProfile' || icon === 'people';

  return (
    <div className={styles.extendedStateCard}>
      {showPieChart && renderPieChart(items)}
      <div className={styles.items}>{renderItems(items, icon)}</div>
    </div>
  );
};

export default ExtendedStateCard;
