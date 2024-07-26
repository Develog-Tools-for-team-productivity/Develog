import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Button from '../../components/button/Button';
import styles from './login.module.css';

const LoginForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      localStorage.setItem('token', token);
      navigate('/select-repo');
    }
    const error = params.get('error');
    if (error) {
      console.error('GitHub 로그인 중 오류가 발생했습니다.');
    }
  }, [location, navigate]);

  const handleGitHubLogin = () => {
    window.location.href = 'http://localhost:5001/api/auth/github';
  };

  return (
    <div className={styles.loginForm}>
      <Button
        text="GitHub로 로그인"
        onClick={handleGitHubLogin}
        type="button"
      />
    </div>
  );
};

export default LoginForm;
