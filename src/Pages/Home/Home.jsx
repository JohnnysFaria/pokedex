import { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import api from '../../Services/api';
import styles from './Home.module.css';
import Container from '../../Components/Container/Container';
import Search from '../../Components/Search/Search';

export default function Home() {
  const [pokemons, setPokemons] = useState(null);
  const [text, setText] = useState('');
  console.log('🚀 ~ Home ~ text', text);

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
    <section className={styles.root}>
      <Search value={text} onChange={(search) => setText(search)} />
      <Container title={'pokedex'}>
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
