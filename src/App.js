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

  switchNameHandler = (newName) => {
    //console.log('switch clicked');
    let s = {...this.state};
    s.persons[2].name = newName;
    this.setState(s);
  }

  changeNameHandler = (event) => {
    //console.log('switch clicked');
    let s = {...this.state};
    s.persons[1].name = event.target.value;
    this.setState(s);
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hey man wassup!</h1>
        <button style={style} onClick={() => this.switchNameHandler("Aditya")}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person changed={this.changeNameHandler} click={this.switchNameHandler.bind(this, "Adi")} name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies include: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    )
  }
}

export default App;