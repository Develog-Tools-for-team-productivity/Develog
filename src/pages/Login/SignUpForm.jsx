import { useState } from 'react';
import { useAtom } from 'jotai';
import { showSignUpAtom } from '../../stores/useStore';

import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import MultiSelectBox from '../../components/select/MultiSelectBox';
import Modal from '../../components/modal/Modal';

import styles from './login.module.css';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [teamName, setTeamName] = useState('');
  const [githubToken, setGithubToken] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [selectedRepositories, setSelectedRepositories] = useState([]);
  const [repositoriesFetched, setRepositoriesFetched] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [, setShowSignUp] = useAtom(showSignUpAtom);

  const validateEmail = email => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = password => {
    const re =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const handleFetchRepositories = async () => {
    try {
      const response = await fetch(
        'http://localhost:5001/api/fetch-repositories',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ githubToken }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch repositories');
      }

      const data = await response.json();
      setRepositories(data.map(repo => ({ id: repo.id, name: repo.name })));
      setRepositoriesFetched(true);
    } catch (error) {
      setErrorMessage('레포지토리를 가져오지 못했습니다.');
      setRepositoriesFetched(false);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('유효한 이메일 주소를 입력하세요.');
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage(
        '비밀번호는 최소 8자, 하나 이상의 대문자, 소문자, 숫자 및 특수 문자를 포함해야 합니다.'
      );
      return;
    }

    if (!githubToken) {
      setErrorMessage('GitHub Token을 입력하세요.');
      return;
    }

    const userData = {
      email,
      password,
      teamName,
      githubToken,
      selectedRepositories,
    };

    try {
      const response = await fetch('http://localhost:5001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        setShowModal(true);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
        console.error('사용자 등록 중 오류 발생:', errorData);
      }
    } catch (error) {
      setErrorMessage('네트워크 오류: ' + error.message);
      console.error('네트워크 오류: ', error.message);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setShowSignUp(false);
  };

  return (
    <>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
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
        <Input
          labelTxt="Team Name"
          placeholder="Team Name을 입력해주세요"
          value={teamName}
          onChange={e => setTeamName(e.target.value)}
        />
        <div className={styles.gitHubInput}>
          <Input
            labelTxt="GitHub Token"
            placeholder="GitHub Token을 입력해주세요"
            value={githubToken}
            onChange={e => setGithubToken(e.target.value)}
            withButton
            buttonText="인증하기"
            onButtonClick={handleFetchRepositories}
          />
        </div>
        {repositoriesFetched && (
          <MultiSelectBox
            options={repositories}
            defaultText="추가할 레포지토리를 선택해 주세요"
            selectedValues={selectedRepositories}
            onChange={setSelectedRepositories}
          />
        )}
        <Button text="Sign up" type="submit" />
      </form>
      {showModal && <Modal onClose={handleCloseModal} />}
    </>
  );
};

export default SignUpForm;
