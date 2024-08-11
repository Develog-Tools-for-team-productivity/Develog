import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

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
    ReactGA.event({
      category: 'User',
      action: 'Clicked the button',
      label: 'Login button',
    });

    window.location.href = `${import.meta.env.VITE_API_URL}/auth/github`;
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
