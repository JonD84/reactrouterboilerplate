import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from "./components/Home";
import Page2 from "./components/Page2";



import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
            <NavBar></NavBar>
            <Route exact path='/' component={Home}/>
            <Route path='/page2' component={Page2}/>
            </div>
        </Router>
    );
  }
}

export default App;
