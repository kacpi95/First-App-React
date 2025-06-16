import styles from './Hero.module.scss';
import PageTitle from '../PageTitle/PageTitle';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <PageTitle>My first React App</PageTitle>
      <p className={styles.subtitle}>
        A simple to-do App, with lists, columns and card
      </p>
    </div>
  );
}
