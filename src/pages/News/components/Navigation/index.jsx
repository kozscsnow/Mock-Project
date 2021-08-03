import React from 'react';
import { MenuOutlined } from '@ant-design/icons';
import styles from './Navigation.module.css';

function Navigation(props) {
  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href=" #">HOT</a>
        </li>
        <li className={styles.navItem}>
          <a href=" #">VIDEO</a>
        </li>
        <li className={styles.navItem}>
          <a href=" #">UPDATE</a>
        </li>
        <li className={styles.navItem}>
          <a href=" #">STYLES</a>
        </li>
      </ul>
      <MenuOutlined className={styles.icon} />
    </nav>
  );
}

export default Navigation;
