import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import Card from '../Card/Card';
import styles from './Favorite.module.scss';

export default function Favorite() {
  const favoriteCards = useSelector(getFavoriteCards);

  return (
    <>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.column}>
        <ul className={styles.cards}>
          {favoriteCards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </ul>
      </div>
    </>
  );
}
