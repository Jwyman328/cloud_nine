import React, {useState} from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import NewsPage from './pages/NewsPage'
import ShowsPage from './pages/ShowsPage'

import MenuModalState from './context/menuModalState';
import './components/MenuModal/menuModal.scss'



function App() {
  const [menuModalisOpen, setMenuModalIsOpen]= useState<boolean>(false);

  const handleClick = ():void => {
    const clickValue = !menuModalisOpen;
    setMenuModalIsOpen(clickValue);
  };


  return (
    <MenuModalState.Provider value={{menuModalisOpen, setMenuModalIsOpen, handleClick}}>
    <div className="App2">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Shows">
            <ShowsPage />
          </Route>
        </Switch>

        <Switch>
          <Route exact path="/News">
            <NewsPage />
          </Route>
        </Switch>
      </Router>
    </div>
    </MenuModalState.Provider>
  );
}

export default App;
