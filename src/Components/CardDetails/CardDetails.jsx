import { useEffect, useState } from 'react';
import api from '../../Services/api';
import Container from '../Container/Container';
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
              <p> Hp {pokemon.stats[0].base_stat}</p>
              <p> Attack {pokemon.stats[1].base_stat}</p>
              <p> Defense {pokemon.stats[2].base_stat}</p>
              <p> Special-Attack {pokemon.stats[3].base_stat}</p>
              <p> Special-Defense {pokemon.stats[4].base_stat}</p>
              <p> Speed {pokemon.stats[5].base_stat}</p>
            </div>

            <div className={styles.about}>
              <p> Height {pokemon.height}</p>
              <p> Weight {pokemon.weight} Kg</p>
            </div>

            <div>
              <div className={styles.info}>
                <p>
                  {pokemon.name} {pokemon.id}
                </p>
                <p> {pokemon.types[0].type.name}</p>
                <p> {pokemon.types[1].type.name}</p>
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
