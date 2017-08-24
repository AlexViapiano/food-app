import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
import Place from './components/pages/Place';
import Bites from './components/pages/Bites';
import Search from './components/elements/Search';
import Profile from './components/pages/Profile';
import './index.css';


const routes = (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="places/location" component={Home} />
        //<Route path="/bites/:address" component={Bites}/>
        <Route path="/place/:id" component={Place}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/search" component={Search}/>
        <Route path="/searchMore" component={Search}/>
        <Route path="/profile" component={Profile} />
      </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));

