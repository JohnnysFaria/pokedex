import styles from './CardDetails.module.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../Services/api';

export default function About() {
  const [pokemon, setPokemon] = useState(null);
  const name = useParams();

  const getPokemon = async () => {
    try {
      const data = await api.getPokemonSpecies(name);
      setPokemon(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getPokemon(name);
  }, [name]);

  return (
    <div className={styles.about}>
      <p> Height {pokemon.height}</p>
      <p> Weight {pokemon.weight} Kg</p>
    </div>
  );
}
