import React from 'react';
import styles from './Champions.module.css';
import video from '../../assets/video/background2.mp4';
export const Champions = () => {
  const [heroe, setHeroe] = React.useState(null);

  React.useEffect(() => {
    fetch(
      'http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion.json',
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        setHeroe(json.data);
      });
  }, []);

  if (heroe === null) return null;
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
          {Object.keys(heroe).map((heroi) => (
            <h1 key={heroi}>{heroi}</h1>
          ))}
        </section>
      </div>
    </div>
  );
};
