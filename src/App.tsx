import { Router } from 'preact-router';

import Layout from '@app/components/Layout/Layout';

import About from './pages/About/About';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Layout>
      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </Layout>
  );
};

export default App;
