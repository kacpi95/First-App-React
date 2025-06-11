import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

export default function Column({ title, icon, addCard, id }) {
  const allCards = useSelector((state) => state.cards);

  const searchString = useSelector((state) => state.search);

  const cards = allCards
    .filter((card) => card.columnId === id)
    .filter((card) =>
      card.title.toLowerCase().includes(searchString.toLowerCase())
    );

  return (
    <article className={styles.column}>
      <h4 className={styles.title}>
        <span className={`${styles.icon} fa fa-${icon}`}></span>
        {title}
      </h4>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
      <CardForm columnId={id} action={addCard} />
    </article>
  );
}
