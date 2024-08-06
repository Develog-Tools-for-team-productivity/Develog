import { useDateRange } from '../../utils/useDateRange';
import styles from './select.module.css';

export default function DateRangePicker({ onDateRangeChange }) {
  const { dateRange, setDateRange, showPicker, setShowPicker } =
    useDateRange(10);

  const handleInputChange = event => {
    const value = event.target.value;
    const [start, end] = value.split(' - ');
    setDateRange({ startDate: start, endDate: end });
  };

  const handleStartDateChange = event => {
    setDateRange(prev => ({ ...prev, startDate: event.target.value }));
  };

  const handleEndDateChange = event => {
    setDateRange(prev => ({ ...prev, endDate: event.target.value }));
  };

  const handlePickerClick = () => {
    setShowPicker(!showPicker);
  };

  const handleApplyClick = () => {
    setShowPicker(false);
    onDateRangeChange(dateRange.startDate, dateRange.endDate);
  };

  return (
    <div className={styles.dateRangePicker}>
      <input
        type="text"
        value={`${dateRange.startDate} - ${dateRange.endDate}`}
        onClick={handlePickerClick}
        onChange={handleInputChange}
        className={styles.dateInput}
        placeholder="YYYY-MM-DD - YYYY-MM-DD"
      />
      {showPicker && (
        <div className={styles.pickerPopup}>
          <div>
            <label htmlFor="start-date">Start Date</label>
            <input
              type="date"
              id="start-date"
              value={dateRange.startDate}
              onChange={handleStartDateChange}
              className={styles.dateInput}
            />
          </div>
          <div>
            <label htmlFor="end-date">End Date</label>
            <input
              type="date"
              id="end-date"
              value={dateRange.endDate}
              onChange={handleEndDateChange}
              className={styles.dateInput}
            />
          </div>
          <button onClick={handleApplyClick} className={styles.applyButton}>
            Apply
          </button>
        </div>
      )}
    </div>
  );
}
