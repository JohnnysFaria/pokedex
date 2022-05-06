import { useEffect, useState } from 'react';
import api from '../../Services/api';
import styles from './Card.module.css';

export default function Card({ name }) {
  const [pokemon, setPokemon] = useState(null);

  const getPokemon = async () => {
    try {
      const data = await api.getPokemonDetails(name);
      setPokemon(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {}, [getPokemon()]);

  return (
    <>
      {pokemon && (
        <div className={styles.card}>
          <p>{pokemon.name}</p>
          <p>{pokemon.id}</p>
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
          />
        </div>
      )}
    </>
  );
}
