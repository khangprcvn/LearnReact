import React, { Component } from 'react';
import classes from './App.css';
import Caculator from '../components/Caculator/Caculator';
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Caculator />
      </div>
    );
  }
}
export default App;
