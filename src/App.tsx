import { Router } from 'preact-router';

import About from './pages/About/About';
import Home from './pages/Home/Home';

const App = () => {
  return (
    <Router>
      <Home path="/" />
      <About path="/about" />
    </Router>
  );
};

export default App;
