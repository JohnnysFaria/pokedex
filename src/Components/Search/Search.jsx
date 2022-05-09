import { useNavigate } from 'react-router-dom';
import './Search.module.css';

export default function Search({ value, onChange }) {
  const navigate = useNavigate();

  function handleChange(e) {
    onChange(e.target.value);
  }

  function handleSubmit(e) {
    const cleanValue = value.trim().toLowerCase();
    e.preventDefault();
    navigate(`/pokemon/details/${cleanValue}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" value={value} onChange={handleChange} required />
      <input type="submit" value="Enviar" />
    </form>
  );
}
