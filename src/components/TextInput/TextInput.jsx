import styles from './TextInput.module.scss';

export default function TextInput({ placeholder, value, onChange }) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type='text'
    />
  );
}
