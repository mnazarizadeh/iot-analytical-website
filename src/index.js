import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DashBoard from './Components/DashBoard';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { createBrowserHistory } from "history";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import "jquery";

const history = createBrowserHistory();

const template = (
  <Router basename={process.env.PUBLIC_URL} history={history}>
    <Route exact path="/" component={App} />
    <Route path="/Dashboard" component={DashBoard} />
  </Router>
);

ReactDOM.render(template, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
