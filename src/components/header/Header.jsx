import { useState, useEffect } from 'react';
import { fetchData } from '../../utils/api';
import styles from './header.module.css';

const Header = ({ headerText }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetchData(
          'http://localhost:5001/api/user-data',
          'GET',
          null,
          '사용자 데이터를 가져오는데 실패하였습니다'
        );

        setUserData(response);
      } catch (error) {
        console.error('데이터를 가져오지 못했습니다:', error);
      }
    };

    getUserData();
  }, []);

  return (
    <header>
      <h3>{headerText}</h3>
      {userData.userInfo && (
        <div className={styles.teamInfo}>
          <span>
            <img
              src={userData.userInfo?.userImg}
              alt="User"
              className={styles.userImg}
            />
          </span>
          <p>{userData.userInfo?.teamName}</p>
        </div>
      )}
    </header>
  );
};

export default Header;
