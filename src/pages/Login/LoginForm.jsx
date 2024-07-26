import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from '../../stores/useStore';

import Button from '../../components/button/Button';

import styles from './login.module.css';

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      localStorage.setItem('token', token);
      setIsLoggedIn(true);
      navigate('/select-repo');
    }
    const error = params.get('error');
    if (error) {
      console.error('GitHub 로그인 중 오류가 발생했습니다.');
    }
  }, [location, navigate, setIsLoggedIn]);

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
