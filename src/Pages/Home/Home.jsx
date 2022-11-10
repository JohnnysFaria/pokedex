import { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import api from '../../Services/api';
import styles from './Home.module.css';
import Container from '../../Components/Container/Container';

export default function Home() {
  const [pokemons, setPokemons] = useState(null);

  const getPokemons = async () => {
    try {
      const data = await api.getPokemonList(0);
      setPokemons(data.results);
    } catch (erro) {
      console.log(erro);
    }
  };
  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <section className={styles.title}>
      <Container title={'All Pokemon'}>
        <div className={styles.list}>
          {pokemons &&
            pokemons.map((pokemon) => {
              return <Card key={pokemon.name} name={pokemon.name} />;
            })}
        </div>
      </Container>
    </section>
  );
}
