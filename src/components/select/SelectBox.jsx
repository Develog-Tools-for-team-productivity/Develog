import { useState } from 'react';
import styles from './select.module.css';

const SelectBox = ({ options, defaultText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultText);

  const handleSelectClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = option => {
    setSelectedOption(option.name);
    setIsOpen(false);
  };

  return (
    <div className={styles.selectWrap}>
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
