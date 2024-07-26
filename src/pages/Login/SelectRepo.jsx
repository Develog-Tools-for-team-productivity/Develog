import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from '../../stores/useStore';

import Button from '../../components/button/Button';
import MultiSelectBox from '../../components/select/MultiSelectBox';
import Modal from '../../components/modal/Modal';
import AuthHeader from './AuthHeader';

import styles from './login.module.css';
import illustImg from '../../assets/img/illustImg.png';

export const SelectRepo = () => {
  const location = useLocation();
  const [repositories, setRepositories] = useState([]);
  const [selectedRepositories, setSelectedRepositories] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRepositories = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('토큰을 찾을 수 없습니다.');
        navigate('/login');
        return;
      }

      try {
        const response = await fetch(
          'http://localhost:5001/api/fetch-repositories',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`Failed to fetch repositories: ${errorData.message}`);
        }

        const data = await response.json();
        setRepositories(data.map(repo => ({ id: repo.id, name: repo.name })));
      } catch (error) {
        console.error('레포지토리를 가져오지 못했습니다:', error);
      }
    };

    fetchRepositories();
  }, [location, navigate]);

  const handleRepositorySubmit = async () => {
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(
        'http://localhost:5001/api/saveRepositoriesInfo',
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ selectedRepositories }),
        }
      );

      if (!response.ok) {
        throw new Error('Server responded with an error');
      }

      const data = await response.json();
      setShowModal(true);
    } catch (error) {
      console.error('레포지토리 업데이트 중 오류 발생:', error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

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
        <AuthHeader />
        <div className={styles.loginForm}>
          <MultiSelectBox
            options={repositories}
            defaultText="추가할 레포지토리를 선택해 주세요"
            selectedValues={selectedRepositories}
            onChange={setSelectedRepositories}
          />
          <Button
            text="Sign up"
            type="submit"
            onClick={handleRepositorySubmit}
          />
          {showModal && <Modal onClose={handleCloseModal} />}
        </div>
      </div>
    </section>
  );
};

export default SelectRepo;
