import styles from './Card.module.scss';
export default function Card({ card }) {
  return <li className={styles.card}>{card.title}</li>;
}
