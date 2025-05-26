import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

export default function Column({ title, icon, cards, addCard, id }) {
  return (
    <article className={styles.column}>
      <h4 className={styles.title}>
        <span className={`${styles.icon} fa fa-${icon}`}></span>
        {title}
      </h4>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
      <CardForm columnId={id} action={addCard} />
    </article>
  );
}
