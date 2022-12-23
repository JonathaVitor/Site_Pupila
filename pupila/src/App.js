import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';

import inicio from './components/inicio';
import sobrenos from './components/sobrenos';
import versoes from './components/versoes';
import documentacao from './components/documentacao';
import mais from './components/mais';

import Navbarmenu from './components/menu/Navbarmenu';

function App() {
  return (
    <div>
      <Router basename="/">

        {/* Add Menu Component */}
        <Navbarmenu />
        
        <Switch> 
          <Route exact path="/" component={inicio}/>
          <Route path="/About" component={sobrenos}/>
          <Route path="/Online" component={versoes}/>
          <Route path="/Offline" component={documentacao}/>
          <Route path="/Contact" component={mais}/>

          
        </Switch>
      </Router>

    </div>
  );
}

export default App;
