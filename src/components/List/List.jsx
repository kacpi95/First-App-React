import styles from './List.module.scss';
import Column from '../Column/Column';

export default function List() {
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
        <Column title='Books' icon='book' />
        <Column title='Movies' icon='gamepad' />
        <Column title='Games' icon='film' />
      </section>
    </>
  );
}
