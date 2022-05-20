import { useEffect, useState } from 'react';
import Container from '../Container/Container';
import api from '../../Services/api';
import styles from './CardDetails.module.css';
import { getBackground } from '../utils/colors';

export default function CardDetails({ name }) {
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async () => {
    try {
      const data = await api.getPokemonDetails(name);
      setPokemon(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getPokemon(name);
  }, [name]);
  return (
    <div>
      <Container>
        {pokemon && (
          <div
            className={styles.card}
            style={{
              background: getBackground(pokemon.types[0].type.name),
            }}
          >
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
            <div>
              <div className={styles.info}>
                <p>
                  {pokemon.name} {pokemon.id}
                </p>
                <p> {pokemon.types[0].type.name}</p>
                {pokemon.types[1] && <p> {pokemon.types[1].type.name}</p>}
                <img
                  src={pokemon.sprites.other['official-artwork'].front_default}
                  alt={pokemon.name}
                />
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}
