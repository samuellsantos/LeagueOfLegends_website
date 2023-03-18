import React from 'react';
import styles from './Champions.module.css';
import video from '../../assets/video/background2.mp4';
export const Champions = () => {
  const [champions, setChampions] = React.useState([]);

  React.useEffect(() => {
    fetch(
      'http://ddragon.leagueoflegends.com/cdn/12.20.1/data/pt_BR/champion.json',
    )
      .then((response) => response.json())
      .then((data) => setChampions(Object.values(data.data)));
  });

  return (
    <div className={styles.background}>
      <video autoPlay loop className={styles.backgroundVideo}>
        <source src={video} type="video/mp4" />
      </video>
      <div className={styles.container}>
        <section>
          <h1 className={styles.title}>Champions</h1>
        </section>

        <section className={styles.champions}>
          {champions.map((champion) => (
            <img
              className={styles.championImg}
              key={champion.id}
              src={`https:///ddragon.leagueoflegends.com/cdn/12.20.1/img/champion/${champion.image.full}`}
              alt={champion.name}
            />
          ))}
        </section>
      </div>
    </div>
  );
};
