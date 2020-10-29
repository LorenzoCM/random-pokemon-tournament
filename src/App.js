import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import injectContext from './store/appContext.js';
import HomePage from './components/homePage';
import Knockout from './components/knockout';
import Semifinal from './components/semifinal';
import Final from './components/final';
import Champion from './components/champion';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />          
          <Route exact path="/knockout" component={Knockout} />
          <Route exact path="/semifinal" component={Semifinal} />
          <Route exact path="/final" component={Final} />
          <Route exact path="/champion" component={Champion} />
        </Switch>
        <ToastContainer autoClose={3000} hideProgressBar limit={1} />
      </BrowserRouter>
    </div>
  );
}

export default injectContext(App);
