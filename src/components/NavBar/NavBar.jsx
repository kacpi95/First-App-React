import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.scss';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to='/'>
          <FontAwesomeIcon icon={faBarsProgress} />
        </Link>
      </div>
      <div className={styles.navLinks}>
        <ul className={styles.ulList}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.linkActive}` : styles.link
              }
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.linkActive}` : styles.link
              }
              to='/favorite'
            >
              Favorite
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.linkActive}` : styles.link
              }
              to='/about'
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
