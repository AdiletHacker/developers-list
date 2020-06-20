import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import DevList from './components/MainFolder/DevList';
import AddDev from './components/AddDev';
import { Switch, Route } from "react-router-dom";

const App = () => {
  return <div className="App container">
    <Header />
    <Navigation />
    <Switch>
      <Route exact path="/" component={DevList} />
      <Route exact path="/add-dev" component={AddDev} />
    </Switch>
  </div>
}

export default App;
