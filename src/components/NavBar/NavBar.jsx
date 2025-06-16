import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.scss';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div>
        <a href='/'>
          <FontAwesomeIcon icon={faBarsProgress} />
        </a>
      </div>
      <div>
        <a href='/'>Home</a>
        <a href='/favorite'>Favorite</a>
        <a href='/about'>About</a>
      </div>
    </nav>
  );
}
