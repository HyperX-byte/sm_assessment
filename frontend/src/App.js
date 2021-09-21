import React from 'react';
import './App.css';
import { HomePage } from './container/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Signin } from './container/Signin';
import { Register } from './container/Register';
import { ListPage } from './container/ListPage';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route  path="/" exact component={HomePage} />
         <Route  path="/login" component={Signin} />
         <Route  path="/register" component={Register} />
         <Route  path="/list" component={ListPage} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
