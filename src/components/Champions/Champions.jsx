import React from 'react';
import styles from './Champions.module.css';
import loadingGif from '../../assets/gif/loading.gif';
import { Link, Route, Routes } from 'react-router-dom';

export const Champions = () => {
  const [champions, setChampions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    //Fazendo fetch dos personagens....
    setLoading(true);
    fetch(
      'http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion.json',
    )
      .then((response) => response.json())
      .then((data) => {
        setChampions(Object.values(data.data));
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className={styles.loading}>
        <img src={loadingGif} alt="Loading" />
      </div>
    );

  if (!loading)
    return (
      <div className={styles.background}>
        <div className={styles.backgroundImg}></div>
        <div className={styles.container}>
          <section>
            <h1 className={styles.title}>Campeões</h1>
          </section>

          <section className={`${styles.champions} animate`}>
            {champions.map((champion) => (
              <Link key={champion.id} to={champion.id}>
                <div className={styles.cardChampion}>
                  <img
                    className={styles.championImg}
                    src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`}
                    alt={champion.name}
                  />
                  <p className={styles.ChampionName}>{champion.name}</p>
                </div>
              </Link>
            ))}
            <Routes>
              <Route path="details" />
            </Routes>
          </section>
        </div>
      </div>
    );
};
