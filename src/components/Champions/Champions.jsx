import React from 'react';
import styles from './Champions.module.css';
import video from '../../assets/video/background2.mp4'; // Video usadado para colocar como background
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
        setTimeout(() => {
          setChampions(Object.values(data.data));
          setLoading(false);
        }, 4000); // O setTimeout foi usado somente para fazer com que gere uma impressão de carreagamento(para eu treinar o estado de loading), já que a API trás os dados rapidamente.
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
        <video autoPlay loop className={styles.backgroundVideo}>
          <source src={video} type="video/mp4" />
        </video>
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
                  <p className={styles.ChampionName}>{champion.id}</p>
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
