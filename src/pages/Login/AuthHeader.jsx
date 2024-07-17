
import styles from './login.module.css';

const AuthHeader = ({ showSignUp }) => {
  return (
    <div className={styles.authHeader}>
      {showSignUp === 'login' ? (
        <>
          <span className={styles.authHeaderEmoji}>👋</span>
          <h2>Welcome back!</h2>
        </>
      ) : (
        <>
          <span className={styles.authHeaderEmoji}>🤝</span>
          <h2>Sign up for an account</h2>
        </>
      )}
      <p>Let's optimize our team's work</p>
    </div>
  );
};

export default AuthHeader;
