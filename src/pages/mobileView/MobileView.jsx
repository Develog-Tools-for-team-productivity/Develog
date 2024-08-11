import styles from './mobileView.module.css';

function MobileView() {
  return (
    <div className={styles.mobile}>
      <span>
        <b>Develog</b>를
        <br /> 찾아주셔서 감사합니다. <br /> <br /> 더 나은 경험을 위해 데스크톱
        버전을 이용해주세요 🖥️
      </span>
      <div className={styles.mobile_img}>
        <img src="../src/assets/img/illustImg.png" alt="illust" />
      </div>
    </div>
  );
}

export default MobileView;
