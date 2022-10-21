
import './styles/main.css';

import {RoutesPage} from './routes'
import { BrowserRouter as Router } from 'react-router-dom';
import { Menu } from './components/Menu';
import 'tw-elements';
import { AuthProvider } from './Context/AuthContext';



function App() {
  return (
    <AuthProvider>
      <Router>
        <Menu/>
        <RoutesPage/>
      </Router>
    </AuthProvider>

  )
}

export default App
