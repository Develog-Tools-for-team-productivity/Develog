import React, { useState } from 'react';

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
    <div className="customSelect">
      <div className="selectBox" onClick={handleSelectClick}>
        <span className={selectedOption === defaultText ? 'defaultOption' : ''}>
          {selectedOption}
        </span>
        <span className="arrow"></span>
      </div>
      {isOpen && (
        <div className="options">
          {options.map(option => (
            <div
              key={option.id}
              className="option"
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
