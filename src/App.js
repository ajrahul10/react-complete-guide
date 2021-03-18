import React, {Component} from 'react'
import Person from './Person/Person'
import classes from './App.module.css'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

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

  nameChangeHandler = (event, id) => {
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

    let persons = null
    let btnClass = '';

    if(this.state.showPerson) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return <ErrorBoundary key={person.id}>
                      <Person 
                        name={person.name} 
                        age={person.age}
                        click={() => this.deletePersonHandler(index)} 
                        textChange={(event) => this.nameChangeHandler(event, person.id)}/>
                    </ErrorBoundary>
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if(this.state.person.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(this.state.person.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hello!</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button 
          className={btnClass}
          onClick={this.togglePersonHandler}>Toggle Person!</button>
          {persons}
        </div>
    );
  }
}

export default App;