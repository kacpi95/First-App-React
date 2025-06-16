import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store';
import shortid from 'shortid';

export default function CardForm({ columnId }) {
  const dispatch = useDispatch();

  const [card, setCard] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = {
      id: shortid(),
      columnId,
      title: card,
    };
    dispatch(addCard(newCard));
    setCard('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        type='text'
        value={card}
        onChange={(e) => setCard(e.target.value)}
      />
      <Button>Add Card</Button>
    </form>
  );
}
