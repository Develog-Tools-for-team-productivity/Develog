import ExtendedStateCard from './ExtendedStateCard';
import styles from './stateCard.module.css';

const StateCard = ({ icon, value, label, extendedStats }) => {
  const renderExtendedStats = () => {
    if (icon === 'cycleTime') {
      return (
        <ExtendedStateCard icon={icon} items={extendedStats.cycleTime.items} />
      );
    }
    if (icon === 'investmentProfile') {
      return (
        <ExtendedStateCard
          icon={icon}
          items={extendedStats.investmentProfile.items}
        />
      );
    }
    if (icon === 'people') {
      return (
        <div className={styles.trackerTeamView}>
          <h4>Investment Profile</h4>
          <ExtendedStateCard
            icon={icon}
            items={extendedStats.investmentProfile.items}
          />
        </div>
      );
    }
    return null;
  };

  const cardClass = `${styles.stateCard} ${icon === 'cycleTime' || icon === 'investmentProfile' ? styles.extended : ''}`;

  return (
    <div className={cardClass}>
      <div className={styles[icon]}></div>
      <div className={styles.content}>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
      {renderExtendedStats()}
    </div>
  );
};

export default StateCard;
