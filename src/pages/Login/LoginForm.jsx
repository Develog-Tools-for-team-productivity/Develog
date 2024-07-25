import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { isLoggedInAtom, showSignUpAtom } from '../../stores/useStore';

import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

import styles from './login.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [, setShowSignUp] = useAtom(showSignUpAtom);

  const navigate = useNavigate();

  const showSignUp = () => {
    setShowSignUp(true);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch('http://localhost:5001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
        navigate('/');
      } else {
        const errorData = await response.json();
        console.error('Error logging in:', errorData);
      }
    } catch (error) {
      console.error('Network error:', error.message);
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <Input
        labelTxt="Email"
        placeholder="Email을 입력해주세요"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input
        labelTxt="Password"
        placeholder="Password을 입력해주세요"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button text="Sign in" type="submit" />
      <p className={styles.signUpText} onClick={showSignUp}>
        Sign up
      </p>
    </form>
  );
};

export default LoginForm;
