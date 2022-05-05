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

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className={styles.card}>
      {pokemon && pokemon.abilities[0].ability.name}
    </div>
  );
}
