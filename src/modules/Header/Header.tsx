import { Link } from 'preact-router/match';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="wrapper">
        <nav className={styles.nav} aria-label="Site navigation">
          <Link activeClassName="active" className={styles.link} href="/">Home</Link>
          <Link activeClassName="active" className={styles.link} href="/works">My works</Link>
          <Link activeClassName="active" className={styles.link} href="/technology">Technology</Link>
          <Link activeClassName="active" className={styles.link} href="/about">About</Link>
          <Link activeClassName="active" className={styles.link} href="/achievements">Achievements</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
