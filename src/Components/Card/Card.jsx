import styles from './Card.module.css';

export default function Card({ name }) {
  return <p className={styles.card}>{name}</p>;
}
