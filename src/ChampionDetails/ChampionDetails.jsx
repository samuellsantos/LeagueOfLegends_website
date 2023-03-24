import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ChampionDetails.module.css';
export const ChampionDetails = () => {
  const { championId } = useParams();
  const [champions, setChampions] = React.useState([]);
  const [about, setAbout] = React.useState(false);

  React.useEffect(() => {
    fetch(
      `http://ddragon.leagueoflegends.com/cdn/12.20.1/data/pt_BR/champion/${championId}.json`,
    )
      .then((response) => response.json())
      .then((data) => {
        setChampions(Object.values(data.data));
        console.log(champions);
      });
  }, []);

  if (champions)
    return (
      <div>
        <div
          className={styles.container}
          style={{
            backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championId}_0.jpg)`,
            backgroundSize: 'cover',
            width: '100%',
            height: '100vh',
            paddingLeft: '100px',
          }}
        >
          {champions.map((champion) => (
            <div key={champion.id}>
              <h1 className={`animate ${styles.name}`}>{champion.name}</h1>
              <h2 className={`animate ${styles.title}`}>{champion.title}</h2>
              {about === false ? (
                <button
                  onClick={() => setAbout(!about)}
                  className={styles.button}
                >
                  Saber Mais...
                </button>
              ) : (
                <button
                  onClick={() => setAbout(!about)}
                  className={styles.button}
                >
                  Menos
                </button>
              )}
              {about === true && (
                <div className={`animate ${styles.containerAbout}`}>
                  <h4 className={styles.about}>{champion.lore}</h4>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  else return null;
};
