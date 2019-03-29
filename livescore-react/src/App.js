import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navbar from "./components/navbar-component/Navbar";
import Livescores from "./components/livescores-table/Livescores";
import Fixtures from "./components/fixtures-component/Fixtures";
import History from "./components/history-component/History";
import Leagues from "./components/leagues-component/Leagues";
import Footer from "./components/footer-component/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div className="main">
          <div className='leagues'>
            <Leagues />
          </div>
          <div className="page">
            <Switch >
              <Route path="/" component={Livescores} exact/>
              <Route path="/history" component={History} />
              <Route path="/fixtures" component={Fixtures} />
              {/* <Route component={Error} /> */}
            </Switch>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
