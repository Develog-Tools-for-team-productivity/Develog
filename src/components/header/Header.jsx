import styles from './header.module.css';

const Header = ({ headerText }) => {
  return (
    <header>
      <h3>{headerText}</h3>
      <div className={styles.teamInfo}>
        <span>FE</span>
        <p>FrontEndTeam</p>
        <button>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
