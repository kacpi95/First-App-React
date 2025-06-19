import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleFavorite, removeCard } from '../../redux/cardsRedux';
import clsx from 'clsx';

export default function Card({ title, id, isFavorite }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFavorite(id));
  };
  const handleRemove = () => {
    dispatch(removeCard(id));
  };
  return (
    <li className={styles.card}>
      {title}
      <div className={styles.buttons}>
        <button
          onClick={handleClick}
          className={clsx('fa', isFavorite ? 'fa-star' : 'fa-star-o')}
          style={{ color: isFavorite ? 'gold' : 'black' }} // Problem z przypisaniem stylów w css
        />
        <button
          className={clsx('fa', 'fa-trash')}
          onClick={handleRemove}
        ></button>
      </div>
    </li>
  );
}
