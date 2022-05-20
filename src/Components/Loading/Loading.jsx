import Container from '../Container/Container';
import styles from './Loading.module.css';

export default function Loading() {
  return (
    <Container>
      <div className={styles.loader}>
        <div></div>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
        <div className={styles.ball}></div>
      </div>
    </Container>
  );
}
