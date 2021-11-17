import React, { UseState } from "react";
import "./App.css";
import Menu from "../navbar/Menu";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Expense from "../pages/expense_tracker";
import ToDoList from "../pages/todo";
import ShoppingList from "../pages/shoppingList";
import Calculator from "../pages/calculator";
import About from "../pages/about";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Menu />
        </Route>
        <Route exact path="/expense_tracker">
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
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
