import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Hello from './components/StatefulHello';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact'

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  )

ReactDOM.render(routing, 
document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
