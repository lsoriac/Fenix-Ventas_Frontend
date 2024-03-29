import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4 

import Navigation from './Components/Navigation'
import FormLogin from './Components/FormLogin'
import FormRegister from './Components/FormRegister'
import FormRecoverPass from './Components/FormRecoverPass'
import ListSales from './Components/ListSales'
import IndexPage from './Components/IndexPage'
import Footer from './Components/Footer'

function App() {
  return (

    <Router>
      <Navigation />
      <Route path="/ventas" component={ListSales} />
        <div>
          <Route path="/" exact component={IndexPage} />
          <Route path="/iniciar-sesion" component={FormLogin} />
          <Route path="/registro" component={FormRegister} />
          <Route path="/recuperar" component={FormRecoverPass} />
      </div>
      <Footer/>
    </Router>


  );
}

export default App;
