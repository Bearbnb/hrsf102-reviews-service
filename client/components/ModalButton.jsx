import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from '../../styles/FlagModal.css';


const ModalButton = ({ header, content, changeRadio }) => (
  <div className={styles.ButtonWrapper}>
    <div className={styles.ModalButtonHeader}>
      {header}
    </div>
    <div className={styles.ModalButtonContent}>
      {content}
      <input type="radio" className={styles.ModalRadio} onClick={() => changeRadio()} />
    </div>
  </div>
);

ModalButton.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  changeRadio: PropTypes.func.isRequired,
};
export default ModalButton;
