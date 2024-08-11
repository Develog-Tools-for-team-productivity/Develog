import { useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { selectedRepoAtom } from '../../stores/useStore';
import { fetchData } from '../../utils/api';
import DateRangePicker from '../select/DateRangePicker';
import SelectBox from '../select/SelectBox';
import styles from './header.module.css';

const TeamViewHeader = ({
  dateSelect,
  onDateRangeChange,
  selectBox,
  options,
}) => {
  const [userData, setUserData] = useState({});
  const [selectedRepo, setSelectedRepo] = useAtom(selectedRepoAtom);

  const handleRepoSelect = repoId => {
    setSelectedRepo(repoId);
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await fetchData(
          `${import.meta.env.VITE_API_URL}/user-data`,
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
    <div className={styles.teamViewHeaderWrap}>
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
      {dateSelect && <DateRangePicker onDateRangeChange={onDateRangeChange} />}
      {selectBox && (
        <SelectBox
          options={options}
          defaultText="레포지토리를 선택해주세요"
          onChange={handleRepoSelect}
          value={selectedRepo}
          board={true}
        />
      )}
    </div>
  );
};

export default TeamViewHeader;
