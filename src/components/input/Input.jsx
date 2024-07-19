import styles from './input.module.css';

const Input = ({
  labelTxt,
  placeholder,
  value,
  onChange,
  type = 'text',
  withButton,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className={styles.inputWrap}>
      <label>{labelTxt}</label>
      <div className={styles.inputFieldWrapper}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></input>
        {withButton && (
          <button type="button" onClick={onButtonClick}>
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
