import React, { UseState } from "react";
import styles from "../src/App.css";
import Menu from "../navbar/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Expense from "../pages/income";
import ToDoList from "../pages/calender";
import ShoppingList from "../pages/shoppingList";
import Calculator from "../pages/calculator";
import Map from "../pages/map"
import About from "../pages/about";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Menu />
        </Route>
        <Route exact path="/income">
          <Expense />
        </Route>
        <Route exact path="/shop">
          <ShoppingList />
        </Route>
        <Route exact path="/calculator">
          <Calculator />
        </Route>
        <Route exact path="/todo">
          <ToDoList />
        </Route>
        <Route exact path="/map">
          <Map />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
