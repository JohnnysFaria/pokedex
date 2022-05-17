import styles from './CardDetails.module.css';
import { useState } from 'react';

export default function About() {
  const [pokemon, setPokemon] = useState(null);
  return (
    <div className={styles.about}>
      <p> Height {pokemon.height}</p>
      <p> Weight {pokemon.weight} Kg</p>
    </div>
  );
}
