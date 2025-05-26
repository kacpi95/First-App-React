import styles from './TextInput.module.scss';

export default function TextInput() {
  return <input placeholder='Search ...' className={styles.input} />;
}
