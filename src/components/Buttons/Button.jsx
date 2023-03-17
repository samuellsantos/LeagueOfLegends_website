import React from 'react';
import styles from './Button.module.css';
export const Button = ({ children, link, target }) => {
  return (
    <div>
      <a href={link} className={styles.button} target={target}>
        {children}
      </a>
    </div>
  );
};
