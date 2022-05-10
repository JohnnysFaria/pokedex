import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardDetails from '../../Components/CardDetails/CardDetails';
import api from '../../Services/api';
import './Details.module.css';

export default function Details() {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);
  const params = useParams();
  const name = params.name;

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const data = await api.getPokemonDetails(name).then((res) => {
          return res;
        });
        setPokemon(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    getPokemon();
  }, [name]);

  if (!loading && pokemon) {
    return (
      <div>
        <CardDetails name={name} />
      </div>
    );
  }

  if (!loading && !pokemon) {
    return <div>pokemon não encontro</div>;
  }

  return <div>loading</div>;
}
