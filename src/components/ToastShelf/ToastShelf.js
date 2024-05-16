import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf(props) {
  const { toasts, handleDismiss } = props;
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => {
        const { id, message } = toast;
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast
              toast={toast}
              handleDismiss={handleDismiss}
            >
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
