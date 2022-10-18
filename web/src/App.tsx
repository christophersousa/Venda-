
import './styles/main.css';

import {RoutesPage} from './routes'
import { BrowserRouter as Router } from 'react-router-dom';
import { Menu } from './components/Menu';



function App() {
  return (
    <Router>
      <Menu/>
      <RoutesPage/>
    </Router>
  )
}

export default App
