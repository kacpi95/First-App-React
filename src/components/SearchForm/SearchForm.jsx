import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { addSearch } from '../../redux/searchRedux';
import { useEffect, useState } from 'react';

export default function SearchForm() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSearch(''));
  }, [dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addSearch(searchValue));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleClick}>
      <TextInput
        placeholder='Search...'
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button type='submit'>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
}
