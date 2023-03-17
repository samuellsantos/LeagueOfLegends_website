import React from 'react';
import { Button } from '../Buttons/Button';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles.background}>
      <div className={styles.information}>
        <section className={styles.section}>
          <h1 className={styles.lol}>
            league <br /> legends
          </h1>
          <span className={styles.of}>Of</span>
        </section>

        <section className={styles.about}>
          <p>
            League of Legends é um jogo online gratuito de estratégia em tempo
            real, onde equipes de cinco jogadores lutam para destruir a base
            inimiga no final do mapa, evoluindo seus personagens com ouro e
            experiência para vencer. É um dos jogos mais populares do mundo, com
            torneios profissionais e milhões de jogadores ativos em todo o
            mundo.
          </p>
        </section>
        <section className={styles.buttonsSection}>
          <Button link="https://www.leagueoflegends.com/pt-br/" target="_blank">
            Play Now
          </Button>
          <Button>Champions</Button>
        </section>
      </div>
    </div>
  );
};
