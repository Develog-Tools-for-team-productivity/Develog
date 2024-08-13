import PieChart from '../chart/PieChart';
import BarChart from '../chart/BarChart';

import styles from './list.module.css';

const chartColors = ['#647AE4', '#F28F45', '#E7595A', '#5BAF69'];
const remainingColor = '#E0E0E0';

const generateChartData = (labels, values) => ({
  labels,
  datasets: [
    {
      data: values,
      backgroundColor: chartColors,
      hoverBackgroundColor: chartColors,
    },
  ],
});

const generateBarChartData = value => ({
  labels: ['Sprint Value'],
  datasets: [
    { label: 'Actual', data: [value], backgroundColor: chartColors[2] },
    {
      label: 'Remaining',
      data: [100 - value],
      backgroundColor: remainingColor,
    },
  ],
});

const separateBarChartData = values => {
  if (!values) return { labels: [], datasets: [] };
  const percentageValues = generatePercentageChartData(values);
  return {
    labels: ['Sprint Value'],
    datasets: percentageValues.map((item, index) => ({
      label: item.label,
      data: [item.value],
      backgroundColor: chartColors[index % chartColors.length],
    })),
  };
};

const generatePercentageChartData = values => {
  if (!values) return [];
  const totalValue = values.reduce((acc, item) => acc + item.value, 0);
  return values.map(item => ({
    ...item,
    value: (item.value / totalValue) * 100,
  }));
};

const ProjectList = ({ headers, data }) => {
  if (!data) return <div>Loading...</div>;

  const headerKeys = Object.keys(headers);
  const calculateTotalProjectDelivery = data.projectDelivery.total.reduce(
    (acc, item) => acc + item.value,
    0
  );

  const renderHeaderCell = (key, index) => (
    <th key={index}>
      {headers[key].sprintName ? (
        <div className={styles.sprint}>
          <p>{headers[key].sprintName}</p>
          <span>{headers[key].date}</span>
        </div>
      ) : (
        headers[key]
      )}
    </th>
  );

  const renderPeopleEffortRow = () => (
    <tr>
      <td>
        <span className={styles.peopleEffort}></span>
        활동 인력 비율
      </td>
      <td>
        <div className={styles.projectGraph}>
          <PieChart
            data={generateChartData(
              ['People Effort', 'Remaining'],
              [data.peopleEffort.value, 100 - data.peopleEffort.value]
            )}
          />
          <p>
            {data.peopleEffort.value}%<br />
            <span>of the team</span>
          </p>
        </div>
      </td>
      <td className={styles.mostActive}>
        <h4>Most Active</h4>
        <ul>
          {data.peopleEffort.mostActive.map((active, index) => (
            <li key={index}>
              <span className={styles.mostActiveImg}>
                <img
                  src={active.profileImageUrl}
                  alt="활동량많은 사용자 이미지"
                />
              </span>
              <p className={styles.mostActiveName}>{active.name}</p>
              <p className={styles.mostActiveActive}>{active.active}</p>
            </li>
          ))}
        </ul>
      </td>
      {headerKeys.map(
        (key, index) =>
          headers[key].sprintName && (
            <td key={index}>
              <div className={styles.projectGraph}>
                <BarChart data={generateBarChartData(headers[key].value)} />
              </div>
            </td>
          )
      )}
    </tr>
  );

  const renderInvestmentProfileRow = () => (
    <tr>
      <td>
        <span className={styles.investmentProfile}></span>
        프로젝트 주요 작업
      </td>
      <td>
        <div className={styles.projectGraph}>
          <PieChart
            data={generateChartData(
              data.investmentProfile.total.map(item => item.label),
              data.investmentProfile.total.map(item => item.value)
            )}
          />
        </div>
      </td>
      <td className={styles.chartList}>
        <ul>
          {data.investmentProfile.total.map((item, index) => (
            <li key={index}>
              <span
                className={styles.chartColor}
                style={{ backgroundColor: chartColors[index] }}
              ></span>
              {item.value}% {item.label}
            </li>
          ))}
        </ul>
      </td>
      {Object.entries(data.investmentProfile.sprints).map(
        ([sprint, values], index) => (
          <td key={index}>
            <div className={styles.projectGraph}>
              <BarChart data={separateBarChartData(values)} />
            </div>
          </td>
        )
      )}
    </tr>
  );

  const renderProjectDeliveryRow = () => (
    <tr>
      <td>
        <span className={styles.projectDelivery}></span>
        프로젝트 달성률
      </td>
      <td>
        <div className={styles.projectGraph}>
          <PieChart
            data={generateChartData(
              data.investmentProfile.total.map(item => item.label),
              data.investmentProfile.total.map(item => item.value)
            )}
          />
          <p>
            {calculateTotalProjectDelivery}
            <br />
            <span>Planned</span>
          </p>
        </div>
      </td>
      <td className={styles.chartList}>
        <ul>
          {data.projectDelivery.total.map((item, index) => (
            <li key={index}>
              <span
                className={styles.chartColor}
                style={{ backgroundColor: chartColors[index] }}
              ></span>
              {item.value} {item.label}
            </li>
          ))}
        </ul>
      </td>
      {Object.entries(data.projectDelivery.sprints).map(
        ([sprint, values], index) => (
          <td key={index}>
            <div className={styles.projectGraph}>
              <BarChart
                data={separateBarChartData(generatePercentageChartData(values))}
              />
            </div>
          </td>
        )
      )}
    </tr>
  );

  const renderPlanningAccuracyRow = () => (
    <tr>
      <td>
        <span className={styles.planningAccuracy}></span>
        계획 정확도
      </td>
      <td>
        <div className={styles.projectGraph}>
          <PieChart
            data={generateChartData(
              ['Planning Accuracy', 'Remaining'],
              [data.planningAccuracy.total, 100 - data.planningAccuracy.total]
            )}
          />
          <p>
            {data.planningAccuracy.total}%<br />
            <span>Planning Accuracy</span>
          </p>
        </div>
      </td>
      <td></td>
      {Object.keys(data.planningAccuracy.sprints).map(
        (key, index) =>
          data.planningAccuracy.sprints[key].sprintName && (
            <td key={index}>
              <div className={styles.projectGraph}>
                <BarChart
                  data={generateBarChartData(
                    data.planningAccuracy.sprints[key].value
                  )}
                />
              </div>
            </td>
          )
      )}
    </tr>
  );

  return (
    <div className={styles.projectList}>
      <table>
        <colgroup>
          <col style={{ width: '20%' }} />
          <col style={{ width: '18%' }} />
          <col style={{ width: '18%' }} />
          <col style={{ width: '11%' }} />
          <col style={{ width: '11%' }} />
          <col style={{ width: '11%' }} />
          <col style={{ width: '11%' }} />
        </colgroup>
        <thead>
          <tr>
            {headerKeys.map((key, index) => renderHeaderCell(key, index))}
          </tr>
        </thead>
        <tbody>
          {renderPeopleEffortRow()}
          {renderInvestmentProfileRow()}
          {renderProjectDeliveryRow()}
          {renderPlanningAccuracyRow()}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;
