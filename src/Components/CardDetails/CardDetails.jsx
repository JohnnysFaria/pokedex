import { useEffect, useState } from 'react';
import Container from '../Container/Container';
import api from '../../Services/api';
import styles from './CardDetails.module.css';

import { getTitle, getBackground } from '../utils/colors';

export default function CardDetails({ name }) {
  const [pokemon, setPokemon] = useState(null);
  const [info, setInfo] = useState('');
  const infoPokemon = async () => {
    try {
      const data = await api.getPokemonSpec(name);
      setInfo(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    infoPokemon(name);
  }, [name]);

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
        <div className={styles.container}>
          {pokemon && (
            <div className={styles.card}>
              <div
                className={styles.styleback}
                style={{
                  borderRightColor: getBackground(pokemon.types[0].type.name),
                }}
              ></div>
              <div className={styles.base}>
                <div className={styles.baseStatus}>
                  <div className={styles.stats}>
                    <span> Hp</span>
                    <div className={styles.back}>
                      <div className={styles.bar}>
                        <p>{pokemon.stats[0].base_stat}</p>
                      </div>
                    </div>
                    <span>Attack </span>
                    <div className={styles.back}>
                      <div className={styles.bar}>
                        <p>{pokemon.stats[1].base_stat}</p>
                      </div>
                    </div>
                    <span> Defense </span>
                    <div className={styles.back}>
                      <div className={styles.bar}>
                        <p>{pokemon.stats[2].base_stat}</p>
                      </div>
                    </div>

                    <span> Special-Attack </span>
                    <div className={styles.back}>
                      <div className={styles.bar}>
                        <p>{pokemon.stats[3].base_stat}</p>
                      </div>
                    </div>

                    <span> Special-Defense </span>
                    <div className={styles.back}>
                      <div className={styles.bar}>
                        <p>{pokemon.stats[4].base_stat}</p>
                      </div>
                    </div>
                    <span> Speed </span>
                    <div className={styles.back}>
                      <div className={styles.bar}>
                        <p>{pokemon.stats[5].base_stat}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.about}>
                    <p>Habitat {info.habitat?.name}</p>
                    <p> Height {pokemon.height}</p>
                    <p> Weight {pokemon.weight} Kg</p>
                    <p>
                      Abilities {pokemon.abilities[0].ability.name}
                      {'     '}
                      {pokemon.abilities[1]?.ability.name}
                    </p>
                    <p>Capture Rate {info.capture_rate}</p>
                    {info.evolves_from_species && (
                      <p>Evolved from {info.evolves_from_species.name}</p>
                    )}
                    {info.egg_groups && (
                      <p> Egg Groups {info.egg_groups[0].name}</p>
                    )}
                    <p> {info.egg_groups?.[1]?.name}</p>
                  </div>
                </div>
              </div>

              <div className={styles.main2}>
                <div className={styles.info}>
                  <div className={styles.name}>
                    <p>{pokemon.name}</p>
                    <span>{pokemon.id}</span>
                  </div>
                  <div className={styles.types}>
                    <p
                      style={{
                        background: getTitle(pokemon.types[0].type.name),
                      }}
                    >
                      {' '}
                      {pokemon.types[0].type.name}
                    </p>
                    {pokemon.types[1] && (
                      <p
                        style={{
                          background: getTitle(pokemon.types[0].type.name),
                        }}
                      >
                        {' '}
                        {pokemon.types[1].type.name}
                      </p>
                    )}
                  </div>
                  <img
                    src={
                      pokemon.sprites.other['official-artwork'].front_default
                    }
                    alt={pokemon.name}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
