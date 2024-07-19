import { useAtom } from 'jotai';
import { showSignUpAtom } from '../../stores/useStore';

import AuthHeader from './AuthHeader';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

import styles from './login.module.css';
import illustImg from '../../assets/img/illustImg.png';

const Login = () => {
  const [showSignUp] = useAtom(showSignUpAtom);

  return (
    <section className={styles.loginSection}>
      <div className={styles.leftLayout}>
        <p className={styles.loginLogo}></p>
        <div className={styles.loginText}>
          Let's optimize
          <br />
          our team's work
        </div>
        <p className={styles.loginImg}>
          <img src={illustImg} alt="Illustration" />
        </p>
      </div>
      <div className={styles.rightLayout}>
        <AuthHeader isSignUpPage={showSignUp} />
        {showSignUp ? <SignUpForm /> : <LoginForm />}
      </div>
    </section>
  );
};

export default Login;
