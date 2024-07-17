import ListStateCard from '../../components/stateCard/ListStateCard';
import ListPieChartCard from '../../components/stateCard/ListPieChartCard';
import styles from './list.module.css';

const CommonList = ({ headers, data }) => {
  const dotColumns = [
    'cycleTime',
    'codingTime',
    'pickUp',
    'review',
    'deploy',
    'commits',
    'prSize',
  ];

  return (
    <div className={styles.commonList}>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.entries(item).map(([key, value], i) => (
                <td key={i}>
                  {key === 'activePeople' || key === 'delivery' ? (
                    <ListStateCard
                      key={index}
                      icon={value.icon}
                      value={value.value}
                      label={value.label}
                    />
                  ) : key === 'investmentProfile' ? (
                    <ListPieChartCard items={value} />
                  ) : (
                    value
                  )}
                  {dotColumns.includes(key) && (
                    <span className={styles.redDot}></span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommonList;
