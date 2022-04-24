import { render } from 'preact';

import App from './App';
import './styles/variables.css';
import './styles/nes.css';
import './index.css';

render(<App />, document.getElementById('app')!);
