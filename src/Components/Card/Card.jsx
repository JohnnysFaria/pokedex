import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Services/api';
import styles from './Card.module.css';
import { getBackground } from '../utils/colors';

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
            <p>{pokemon.name}</p>
            <p>{pokemon.id}</p>
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt={pokemon.name}
            />
          </div>
        </Link>
      )}
    </>
  );
}
