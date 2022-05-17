import Search from '../Search/Search';
import styles from './Header.module.css';
import { useState } from 'react';

export default function Header() {
  const [text, setText] = useState('');
  return (
    <div className={styles.header}>
      <Search value={text} onChange={(search) => setText(search)} />
      <p>Pokedex</p>
    </div>
  );
}
