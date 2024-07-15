import React from 'react';
import Button from './Button';

const Input = ({ labelTxt, placeholder, withButton, buttonText }) => {
  return (
    <div className="inputWrap">
      <label>{labelTxt}</label>
      <div className="inputFieldWrapper">
        <input type="text" placeholder={placeholder}></input>
        {withButton && <Button text={buttonText} />}
      </div>
    </div>
  );
};

export default Input;
