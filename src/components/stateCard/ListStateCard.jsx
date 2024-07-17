import styles from './stateCard.module.css';

const ListStateCard = ({ icon, value, label }) => {
  return (
    <div className={styles.listStateCard}>
      <div className={styles[icon]}></div>
      <div className={styles.content}>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default ListStateCard;
