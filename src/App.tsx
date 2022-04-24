import { Router } from 'preact-router';

import Layout from '@app/components/Layout/Layout';
import About from '@app/pages/About/About';
import Home from '@app/pages/Home/Home';
import MyWorks from '@app/pages/MyWorks/MyWorks';
import Technology from '@app/pages/Technology/Technology';

const App = () => {
  return (
    <Layout>
      <Router>
        <Home path="/" />
        <About path="/about" />
        <MyWorks path="/works" />
        <Technology path="/technology" />
      </Router>
    </Layout>
  );
};

export default App;
