import React, {Component} from 'react'
import Person from './Person/Person'
import './App.css'

class App extends Component {

  state = {
    person: [
      {name: 'Rahul', age: 27},
      {name: 'Aditya', age: 26},
      {name: 'Sameer', age: 24}
    ]
  }

  buttonClickHandler = (newName) => {
    this.setState({
      person: [
        {name: 'Rahul', age: 27},
        {name: newName, age: 26},
        {name: 'Sameer', age: 24}
      ]
    })
  }

  textChangeHandler = (event) => {
    let name = event.target.value;
    this.setState({
      person: [
        {name: 'Rahul', age: 27},
        {name: name, age: 26},
        {name: 'Sameer', age: 24}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello!</h1>
        <button onClick={this.buttonClickHandler.bind(this, 'Akshay')}>Click me</button>
        <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age} />
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          changeName={() => this.buttonClickHandler('Akku')}
          textChange={this.textChangeHandler}>My hobbies: Luxury</Person>
        <Person 
          name={this.state.person[2].name} 
          age={this.state.person[2].age} />
      </div>
    );
  }
}

export default App;