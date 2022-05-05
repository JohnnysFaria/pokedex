import { useEffect, useState } from 'react';
import Card from '../Components/Card/Card';
import api from '../Services/api';

export default function Home() {
  const [pokemons, setPokemons] = useState(null);
  const getPokemons = async () => {
    try {
      const data = await api.getPokemonList(15);
      setPokemons(data.results);
    } catch (erro) {
      console.log(erro);
    }
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <>
      <h1>Texto</h1>
      {pokemons &&
        pokemons.map((pokemon) => {
          return <Card key={pokemon.name} name={pokemon.name} />;
        })}
    </>
  );
}
