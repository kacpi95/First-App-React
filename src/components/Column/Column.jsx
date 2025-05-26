import styles from './Column.module.scss';

export default function Column({ title, icon }) {
  return (
    <article className={styles.column}>
      <h4 className={styles.title}>
        <span className={`${styles.icon} fa fa-${icon}`}></span>
        {title}
      </h4>
    </article>
  );
}
