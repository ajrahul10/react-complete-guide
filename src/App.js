import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Rahul', age: 27},
      {name: 'Sameer', age: 24},
      {name: 'Akshay', age: 26}
    ]
  }

  switchNameHandler = () => {
    //console.log('switch clicked');
    let s = {...this.state};
    s.persons[2].name = 'Aditya';
    this.setState(s);
  }

  render() {
    return (
      <div className="App">
        <h1>Hey man wassup!</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies include: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
  }
}

export default App;