import Button from '../button/Button';
import styles from './input.module.css';

const Input = ({ labelTxt, placeholder, withButton, buttonText }) => {
  return (
    <div className={styles.inputWrap}>
      <label>{labelTxt}</label>
      <div className={styles.inputFieldWrapper}>
        <input type="text" placeholder={placeholder}></input>
        {withButton && <Button text={buttonText} />}
      </div>
    </div>
  );
};

export default Input;
