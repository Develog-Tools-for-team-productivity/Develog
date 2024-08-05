import styles from './modal.module.css';

const Modal = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <span className={styles.signUpIcon}></span>
        <p>로그인이 완료되었습니다.</p>
        <button onClick={onClose} className={styles.closeButton}>
          확인
        </button>
      </div>
    </div>
  );
};

export default Modal;
