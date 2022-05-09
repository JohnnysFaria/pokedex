import './Search.module.css';

export default function Search({ value, onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }
  return (
    <div>
      <input type="search" value={value} onChange={handleChange} />
    </div>
  );
}
