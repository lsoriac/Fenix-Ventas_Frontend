import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4 

import Navigation from './Components/Navigation'
import FormLogin from './Components/FormLogin'
import FormRegister from './Components/FormRegister'
import ListSales from './Components/ListSales'

function App() {
  return (

     <Router>
       <Navigation/>
       <div className="container p-4" style = {{minHeight: "85vh"}}>
      

    <Route path="/iniciar-sesion" component={FormLogin}/>
    <Route path="/registro" component={FormRegister}/>
    <Route path="/ventas" component={ListSales}/>
    </div>
     </Router>
    
  );
}

export default App;
