import React from 'react';
import LOL from '../../assets/img/logo.png';
import diamond from '../../assets/img/Diamond.png';
import chat from '../../assets/img/Chat.png';
import control from '../../assets/img/Game.png';
import riot from '../../assets/img/Riot.png';
import styles from './SideNav.module.css';
import { Link } from 'react-router-dom';
export const SideNav = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={LOL} alt="Logo LOL" />
        </Link>
      </div>
      <div className={styles.listItems}>
        <ul>
          <li>
            <img src={diamond} alt="diamond" />
          </li>
          <li>
            <img src={chat} alt="chat" />
          </li>
          <li>
            <img src={control} alt="control" />
          </li>
        </ul>
      </div>
      <div className={styles.riot}>
        <a href="https://www.riotgames.com/pt-br" target="_blank">
          <img src={riot} alt="RIOT logo" />
        </a>
      </div>
    </nav>
  );
};
