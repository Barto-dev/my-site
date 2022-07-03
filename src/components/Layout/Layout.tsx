import { FunctionalComponent } from 'preact';

import Header from '@app/modules/Header/Header';

import styles from './Layout.module.css';

const Layout: FunctionalComponent = ({ children }) => {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
