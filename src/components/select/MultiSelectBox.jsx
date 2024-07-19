import { useState } from 'react';
import styles from './select.module.css';

const MultiSelectBox = ({ options, defaultText, selectedValues, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = option => {
    const newSelectedValues = [...selectedValues];
    const index = newSelectedValues.findIndex(value => value.id === option.id);
    if (index > -1) {
      newSelectedValues.splice(index, 1);
    } else {
      newSelectedValues.push(option);
    }
    onChange(newSelectedValues);
  };

  return (
    <div className={styles.selectWrap}>
      <div className={styles.selectBox} onClick={handleSelectClick}>
        <span>
          {selectedValues.length > 0
            ? selectedValues.map(value => value.name).join(', ')
            : defaultText}
        </span>
        <span className={styles.arrow}></span>
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map(option => (
            <div
              key={option.id}
              className={`${styles.option} ${selectedValues.find(value => value.id === option.id) ? styles.selected : ''}`}
              onClick={() => handleOptionClick(option)}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectBox;
