import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';
import TextInput from '../TextInput/TextInput';
import { text } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';
import shortid from 'shortid';
import styles from './ListForm.module.scss';
import Button from '../Button/Button';

export default function ListForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newList = {
      id: shortid(),
      title,
      description,
    };
    dispatch(addList(newList));
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.columnForm}>
      <span className={styles.span}>Title: </span>
      <TextInput
        type={text}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <span className={styles.span}>Description: </span>
      <TextInput
        type={text}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button>ADD LIST</Button>
    </form>
  );
}
