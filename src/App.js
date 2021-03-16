import React, {Component} from 'react'
import Person from './Person/Person'
import './App.css'
import Radium, {StyleRoot} from 'radium'

class App extends Component {

  state = {
    person: [
      {id: 'adsasd', name: "Rahul", age: 27},
      {id: 'agsdg', name: "Aditya", age: 26},
      {id: 'fdhghf', name: "Sameer", age: 24}
    ],
    showPerson: false
  }

  togglePersonHandler = () => {
    this.setState({showPerson: !this.state.showPerson})
  }

  deletePersonHandler = (index) => {
    // let personCopy = this.state.person.slice();
    let personCopy = [...this.state.person]
    personCopy.splice(index, 1);
    this.setState({person: personCopy});
  }

  togglePerson = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    })
    const personCopy = [...this.state.person]
    // const person = Object.assign({}, this.state.person);

    let newName = event.target.value;
    personCopy[personIndex].name = newName;
    this.setState({person: personCopy})
  }

  render() {

    const style = {
      backgroundColor: 'green', 
      color: 'white',
      padding: '4px 6px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    let persons = null

    if(this.state.showPerson) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person 
                    key={person.id}
                    name={person.name} 
                    age={person.age}
                    click={() => this.deletePersonHandler(index)} 
                    textChange={(event) => this.togglePerson(event, person.id)}/>
          })}
        </div>
      );

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      };
    }

    const classes = [];
    if(this.state.person.length <= 2) {
      classes.push('red');
    }
    if(this.state.person.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <h1>Hello!</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button 
          style={style}
          onClick={this.togglePersonHandler}>Toggle Person!</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);