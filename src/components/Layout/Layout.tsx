import { FunctionalComponent } from 'preact';

import Header from '@app/modules/Header/Header';

const Layout: FunctionalComponent = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
