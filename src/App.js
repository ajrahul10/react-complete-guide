import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hey man wassup!</h1>
        <Person name="Rahul" age="27" />
        <Person name="Sameer" age="24" />
      </div>
    )
  }
}

export default App;