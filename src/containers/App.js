import React, { Component } from 'react';
import classes from './App.css';
import FilterableProductTable from '../components/FilterableProductTable/FIlterableProductTable';
class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <FilterableProductTable />
      </div>
    );
  }
}
export default App;
