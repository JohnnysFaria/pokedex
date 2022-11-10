import Search from '../Search/Search';
import styles from './Header.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [text, setText] = useState('');
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.algo}>
          <Search value={text} onChange={(search) => setText(search)} />
          <Link to="/">
            <p>Pokedex</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
