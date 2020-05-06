import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Login from "./Components/Login";
import Admin from "./Dashboard/Admin";
import Electricity from "./Dashboard/views/Electricity";
import Water from "./Dashboard/views/Water";
import Gas from "./Dashboard/views/Gas";
import Diagnosis from "./Dashboard/views/Diagnosis";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { createBrowserHistory } from "history";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import "jquery";

const history = createBrowserHistory();

const loader = document.querySelector(".loader");
const showLoader = () => loader.classList.remove("loader--hide");
const hideLoader = () => {
    loader.classList.add("loader--hide");
    document.querySelector('#root').classList.add('page-show');
};

const template = (
  <Router
    basename={process.env.PUBLIC_URL}
    history={history}
    hideLoader={hideLoader}
    showLoader={showLoader}
  >
    {/* <Route exact path="/" component={App} /> */}
    <Route exact path="/" render={props => <App hideLoader={hideLoader} {...props} />} />
    <Route path="/Dashboard" /*component={Admin}*/ render={props => <Admin hideLoader={hideLoader} {...props} />} />
    <Route path="/Electricity" /*component={Electricity}*/ render={props => <Electricity hideLoader={hideLoader} {...props} />} />
    <Route path="/Water" /*component={Water}*/ render={props => <Water hideLoader={hideLoader} {...props} />} />
    <Route path="/Gas" /*component={Gas}*/ render={props => <Gas hideLoader={hideLoader} {...props} />} />
    <Route path="/Diagnosis" /*component={Diagnosis}*/ render={props => <Diagnosis hideLoader={hideLoader} {...props} />} />
    <Route path="/Settings" /*component={Admin}*/ render={props => <Admin hideLoader={hideLoader} {...props} />} />
    <Route path="/login" /*component={Login}*/ render={props => <Login hideLoader={hideLoader} {...props} />} />
  </Router>
);

setTimeout(
  () => ReactDOM.render(template, document.getElementById("root")),
  1000
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
