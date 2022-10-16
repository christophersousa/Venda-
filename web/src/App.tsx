
import './styles/main.css';

import logoImg from './assets/logo-nlw-exports.svg';
import { Menu } from './components/Menu';
import { Login } from './page/Login';
import { Cadastro } from './page/Cadastro';


function App() {
  return (
    <div className=" mx-auto flex flex-col min-h-screen">
      <Menu/>
      <Cadastro/>
    </div>
  )
}

export default App
