import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>My first React App</h1>
      <p className={styles.subtitle}>
        A simple to-do App, with lists, columns and card
      </p>
    </div>
  );
}
