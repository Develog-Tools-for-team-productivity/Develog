import { NavLink } from 'react-router-dom';
import styles from './sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <span className={styles.sidebarLogo}></span>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles.dashboardList} ${styles.on}`
                : styles.dashboardList
            }
          >
            <span className={styles.dashboardIcon}></span> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cycle-time"
            className={({ isActive }) =>
              isActive
                ? `${styles.cycleTimeList} ${styles.on}`
                : styles.cycleTimeList
            }
          >
            <span className={styles.cycleTimeIcon}></span> Cycle Time
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/project-delivery-tracker"
            className={({ isActive }) =>
              isActive
                ? `${styles.trackerList} ${styles.on}`
                : styles.trackerList
            }
          >
            <span className={styles.trackerIcon}></span> Project Delivery
            Tracker
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
