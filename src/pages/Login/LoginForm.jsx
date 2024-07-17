import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import styles from './login.module.css';

const LoginForm = () => {
  return (
    <form className={styles.loginForm}>
      <Input labelTxt="Email" placeholder="Email을 입력해주세요" />
      <Input labelTxt="Password" placeholder="Password을 입력해주세요" />
      <Button text="Sign in" />
      <a className={styles.signUpText}>Sign up</a>
    </form>
  );
};

export default LoginForm;
