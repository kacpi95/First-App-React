import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

export default function SearchForm() {
  return (
    <form style={styles.SearchForm}>
      <TextInput />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
}
