import styles from './board.module.css';

const MainBoard = ({ boardTitle, children }) => {
  return (
    <div className={styles.mainBoard}>
      <h3>{boardTitle}</h3>
      <div className={styles.boardContent}>{children}</div>
    </div>
  );
};

export default MainBoard;
