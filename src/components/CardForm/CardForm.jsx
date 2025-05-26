import { useState } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

export default function CardForm({ action, columnId }) {
  const [card, setCard] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    action({ title: card }, columnId);
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
