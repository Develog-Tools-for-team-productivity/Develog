import { useState, useEffect } from 'react';
import styles from './select.module.css';

const SelectBox = ({ options, defaultText, onChange, value, board }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultText);

  useEffect(() => {
    const selected = options.find(option => option.id === value);
    if (selected) {
      setSelectedOption(selected.name);
    } else {
      setSelectedOption(defaultText);
    }
  }, [value, options, defaultText]);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = option => {
    setSelectedOption(option.name);
    onChange(option.id);
    setIsOpen(false);
  };

  return (
    <div
      className={`${styles.selectWrap} ${board === true ? styles.boardSelect : ''}`}
    >
      <div className={styles.selectBox} onClick={handleSelectClick}>
        <span className={selectedOption === defaultText ? 'defaultOption' : ''}>
          {selectedOption}
        </span>
        <span className={styles.arrow}></span>
      </div>
      {isOpen && (
        <div className={styles.options}>
          {options.map(option => (
            <div
              key={option.id}
              className={styles.option}
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

export default SelectBox;
