
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Navbar from "../componets/Navbar/navbar"
import Pages from '../pages';
import Overlay from "../componets/overlay/overlay"

function routes({ menubar, toggle }) {


  return (
    <Router>
      <Navbar menubar={menubar} toggle={toggle} />
      {menubar && <Overlay toggle={toggle} />}
      <Switch>
        <Route path="/" exact component={Pages.Home} />
        <Route path="/about" exact component={Pages.About} />
        <Route path="/portfolio" exact component={Pages.Portfolio} />
        <Route path="/experience" exact component={Pages.Experience} />
        <Route path="/contact" exact component={Pages.Contact} />
      </Switch>
    </Router>

  );
}

export default routes;