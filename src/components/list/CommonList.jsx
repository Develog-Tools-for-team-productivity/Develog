import ListStateCard from '../../components/stateCard/ListStateCard';
import ListPieChartCard from '../../components/stateCard/ListPieChartCard';
import { getColorByKey } from '../../utils/colorUtils';

import styles from './list.module.css';

const DOT_COLUMNS = [
  'cycleTime',
  'codingTime',
  'pickUp',
  'review',
  'deploy',
  'prSize',
];

const CommonList = ({ headers, data, page, setState }) => {
  const handleRowClick = index => {
    if (page === 'ProjectDeliveryTracker') {
      setState(index);
    }
  };

  const renderCell = (key, value) => {
    if (key === 'activePeople' || key === 'delivery') {
      return (
        <ListStateCard
          icon={value.icon}
          value={value.value}
          label={value.label}
        />
      );
    } else if (key === 'investmentProfile') {
      return <ListPieChartCard items={value} />;
    } else {
      return (
        <>
          {value}
          {DOT_COLUMNS.includes(key) && (
            <span
              className={`${styles.mark} ${styles[getColorByKey(key, value)]}`}
            ></span>
          )}
        </>
      );
    }
  };

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
            <tr
              key={index}
              onClick={() => handleRowClick(index)}
              className={
                page === 'ProjectDeliveryTracker' ? styles.pointer : ''
              }
            >
              {Object.entries(item).map(([key, value], i) => (
                <td key={i}>{renderCell(key, value)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommonList;
