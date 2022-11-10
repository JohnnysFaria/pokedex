import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Services/api';
import styles from './Card.module.css';
import { getTitle, getBackground } from '../utils/colors';

export default function Card({ name }) {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const data = await api.getPokemonDetails(name);
        setPokemon(data);
      } catch (e) {
        console.log(e);
      }
    };
    getPokemon();
  }, [name]);

  return (
    <>
      {pokemon && (
        <Link to={`/pokemon/details/${pokemon.name}`}>
          <div
            className={styles.card}
            style={{
              background: getBackground(pokemon.types[0].type.name),
            }}
          >
            <div className={styles.info}>
              <p>{pokemon.name}</p>
              <p
                style={{
                  background: getTitle(pokemon.types[0].type.name),
                }}
              >
                {pokemon.types[0].type.name}
              </p>

              {pokemon.types[1] && (
                <p
                  style={{
                    background: getTitle(pokemon.types[0].type.name),
                  }}
                >
                  {pokemon.types[1].type.name}
                </p>
              )}
            </div>
            <span className={styles.id}>{pokemon.id}</span>
            <div className={styles.image}>
              <img
                src={pokemon.sprites.other['official-artwork'].front_default}
                alt={pokemon.name}
              />
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
