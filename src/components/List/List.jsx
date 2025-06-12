import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useSelector } from 'react-redux';
import { getAllColumns } from '../../redux/store';

export default function List() {
  const columns = useSelector(getAllColumns);

  return (
    <>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do<span className={styles.span}>soon!</span>
        </h2>
      </header>
      <p className={styles.description}>
        interesting things I want to check out!
      </p>
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm />
    </>
  );
}
