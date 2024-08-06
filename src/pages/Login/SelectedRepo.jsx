import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from '../../stores/useStore';
import { fetchData } from '../../utils/api';

import Button from '../../components/button/Button';
import MultiSelectBox from '../../components/select/MultiSelectBox';
import Modal from '../../components/modal/Modal';
import AuthHeader from './AuthHeader';
import Loading from '../../components/Loading/loading';

import styles from './login.module.css';
import illustImg from '../../assets/img/illustImg.png';

export const SelectedRepo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [repositories, setRepositories] = useState([]);
  const [selectedRepositories, setSelectedRepositories] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        const repositoriesData = await Promise.all([
          fetchData(
            'http://localhost:5001/api/fetch-repositories',
            'GET',
            null,
            '레포지토리를 불러오는데 실패하였습니다'
          ),
        ]);

        if (!repositoriesData) return;

        const userSelectedRepositories = userData.selectedRepositories;
        setSelectedRepositories(userSelectedRepositories);

        const remainingRepositories = repositoriesData.filter(
          repo =>
            !userSelectedRepositories.some(
              selectedRepo => selectedRepo.id === repo.id
            )
        );

        setRepositories(
          remainingRepositories.map(repo => ({ id: repo.id, name: repo.name }))
        );
      } catch (error) {
        console.error('데이터를 가져오지 못했습니다:', error);
      }
    };

    fetchRepositories();
  }, [location, navigate]);

  const handleRepositorySubmit = async () => {
    setIsLoading(true);

    try {
      const data = await fetchData(
        'http://localhost:5001/api/saveRepositoriesInfo',
        'POST',
        { selectedRepositories },
        '레포지토리 업데이트 중 오류 발생'
      );

      setIsLoading(false);
      setShowModal(true);
    } catch (error) {
      console.error('레포지토리 업데이트 중 오류 발생:', error);
      setIsLoading(false);
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
          <div className={styles.selectedRepositories}>
            <p>
              현재 저장되어있는 레포지토리는
              {selectedRepositories.map(repo => (
                <span key={repo.id}>{repo.name}</span>
              ))}
              입니다.
            </p>
          </div>
          <Button
            text="레포지토리 선택완료"
            type="submit"
            onClick={handleRepositorySubmit}
          />
          {showModal && <Modal onClose={handleCloseModal} />}
        </div>
      </div>
      {isLoading && <Loading />}
    </section>
  );
};

export default SelectedRepo;
