import styles from './CardDetails.module.css';
import { useState } from 'react';

export default function Basestats() {
  const [pokemon, setPokemon] = useState(null);
  return (
    <div className={styles.baseStatus}>
      <div className={styles.baseStatus}>
        <span> Hp</span>
        <div className={styles.back}>
          <div className={styles.teste}>
            <p>{pokemon.stats[0].base_stat}</p>
          </div>
        </div>

        <span>Attack </span>
        <div className={styles.back}>
          <div className={styles.teste}>
            <p>{pokemon.stats[1].base_stat}</p>
          </div>
        </div>

        <span> Defense </span>
        <div className={styles.back}>
          <div className={styles.teste}>
            <p>{pokemon.stats[2].base_stat}</p>
          </div>
        </div>

        <span> Special-Attack </span>
        <div className={styles.back}>
          <div className={styles.teste}>
            <p>{pokemon.stats[3].base_stat}</p>
          </div>
        </div>

        <span> Special-Defense </span>
        <div className={styles.back}>
          <div className={styles.teste}>
            <p>{pokemon.stats[4].base_stat}</p>
          </div>
        </div>

        <span> Speed </span>
        <div className={styles.back}>
          <div className={styles.teste}>
            <p>{pokemon.stats[5].base_stat}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
