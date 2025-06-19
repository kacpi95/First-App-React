import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../redux/cardsRedux';
import clsx from 'clsx';

export default function Card({ title, id, isFavorite }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFavorite(id));
  };

  return (
    <li className={styles.card}>
      {title}
      <button
        onClick={handleClick}
        className={clsx('fa', isFavorite ? 'fa-star' : 'fa-star-o')}
        style={{ color: isFavorite ? 'gold' : 'black' }} // Problem z przypisaniem stylów w css
      />
    </li>
  );
}
