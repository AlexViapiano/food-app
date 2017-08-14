import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
//note: Bites = search results
import Bites from './components/pages/Bites';
import './index.css';


const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/bites" component={Bites}/>
        {/*<Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>*/}
      </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));

