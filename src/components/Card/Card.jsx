import styles from './Card.module.scss';
export default function Card({ title }) {
  return <li className={styles.card}>{title}</li>;
}
