import DateRangePicker from '../select/DateRangePicker';
import styles from './header.module.css';

const TeamViewHeader = ({ dateSelect }) => {
  return (
    <div className={styles.teamViewHeaderWrap}>
      <p className={styles.teamName}>
        <span>FE</span>FrontEnd Team
      </p>
      {dateSelect && <DateRangePicker />}
    </div>
  );
};

export default TeamViewHeader;
