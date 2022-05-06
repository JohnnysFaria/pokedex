import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../Services/api';
import './Details.module.css';

export default function Details() {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);
  const name = params.name;

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

  return <div>{pokemon && pokemon.name}</div>;
}
