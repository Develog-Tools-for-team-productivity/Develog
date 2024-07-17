import { useState, useRef } from 'react';
import styles from './select.module.css';

function DateRangePicker() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showPicker, setShowPicker] = useState(false);
  const dateInputRef = useRef(null);

  const handleInputChange = event => {
    const value = event.target.value;
    const [start, end] = value.split(' - ');
    setStartDate(start);
    setEndDate(end);
  };

  const handleStartDateChange = event => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = event => {
    setEndDate(event.target.value);
  };

  const handlePickerClick = () => {
    setShowPicker(!showPicker);
  };

  const handleApplyClick = () => {
    setShowPicker(false);
    dateInputRef.current.value = `${startDate} - ${endDate}`;
  };

  return (
    <div className={styles.dateRangePicker}>
      <input
        type="text"
        ref={dateInputRef}
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
              value={startDate}
              onChange={handleStartDateChange}
              className={styles.dateInput}
            />
          </div>
          <div>
            <label htmlFor="end-date">End Date</label>
            <input
              type="date"
              id="end-date"
              value={endDate}
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

export default DateRangePicker;
