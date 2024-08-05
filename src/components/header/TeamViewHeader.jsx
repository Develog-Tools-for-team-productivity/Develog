import { useAtom } from 'jotai';
import { selectedRepoAtom } from '../../stores/useStore';
import DateRangePicker from '../select/DateRangePicker';
import SelectBox from '../select/SelectBox';
import styles from './header.module.css';

const TeamViewHeader = ({
  dateSelect,
  onDateRangeChange,
  selectBox,
  options,
}) => {
  const [selectedRepo, setSelectedRepo] = useAtom(selectedRepoAtom);

  const handleRepoSelect = repoId => {
    setSelectedRepo(repoId);
  };

  return (
    <div className={styles.teamViewHeaderWrap}>
      <p className={styles.teamName}>
        <span>FE</span>FrontEnd Team
      </p>
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
