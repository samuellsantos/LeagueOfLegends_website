import React from 'react';
import styles from './Champions.module.css';
import video from '../../assets/video/background2.mp4'; // Video usadado para colocar como background
import loadingGif from '../../assets/gif/loading.gif';

const personagensInativos = [
  'Aurelion Sol',
  'Bardo',
  `Bel'Veth`,
  `Cho'Gath`,
  `Dr. Mundo`,
  `jarvan IV`,
  `Kai'Sa`,
  `Kha'Zix`,
  `Kog'Maw`,
  `LeBlanc`,
  `Lee Sin`,
  `Master Yi`,
  `Miss Fortune`,
  `Wukong`,
  `Nunu e Willump`,
];
export const Champions = () => {
  const [champions, setChampions] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    //Fazendo fetch dos personagens....
    setLoading(true);
    fetch(
      'http://ddragon.leagueoflegends.com/cdn/12.20.1/data/pt_BR/champion.json',
    )
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          const championsArray = Object.values(data.data);
          const championsNames = championsArray.map((champion) => ({
            ...champion,
            name: champion.name.replace(/\s/g, ''),
          }));
          setChampions(championsNames);
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

  if (loading === false)
    return (
      <div className={styles.background}>
        <video autoPlay loop className={styles.backgroundVideo}>
          <source src={video} type="video/mp4" />
        </video>
        <div className={styles.container}>
          <section>
            <h1 className={styles.title}>Champions</h1>
          </section>

          <section className={`${styles.champions} animate`}>
            {champions.map((champion) => (
              <div key={champion.id} className={styles.cardChampion}>
                <img
                  className={styles.championImg}
                  src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.name}_0.jpg`}
                  alt={champion.name}
                />
                <p className={styles.ChampionName}>{champion.name}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    );
};
