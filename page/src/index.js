import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import 'gestalt/dist/gestalt.css'
import Login from './Components/Login'
import Register from './Components/Register'
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Router>
    <Switch>
      <Route component={App} exact path='/'/>
      <Route component={Login} path='/login'/>
      <Route component={Register} path='/register'/>
    </Switch>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
