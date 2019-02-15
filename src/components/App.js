import React, { Component } from 'react';
import Map from '../containers/Map';
import AddPlaceName from '../containers/AddPlaceName';
import List from '../containers/List';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className = "app">
        <div className = "app__search" >
          <AddPlaceName />
          <List />
        </div>
        <Map/>
      </div>
    );
  }
}

export default App;
