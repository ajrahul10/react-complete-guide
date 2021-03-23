import React, {Component} from 'react'

import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import classes from './App.module.css'

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[Apps.js] constructor');
  }

  state = {
    person: [
      {id: 'adsasd', name: "Rahul", age: 27},
      {id: 'agsdg', name: "Aditya", age: 26},
      {id: 'fdhghf', name: "Sameer", age: 24}
    ],
    showPerson: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
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

    console.log('[App.js] render');

    let persons = null;

    if(this.state.showPerson) {
      persons = <Persons 
          person={this.state.person}
          clicked={this.deletePersonHandler} 
          changed={this.nameChangeHandler}/>;
    }


    return (
        <div className={classes.App}>
          <Cockpit 
            title={this.props.appTitle}
            person={this.state.person} 
            showPerson={this.state.showPerson}
            togglePerson={this.togglePersonHandler} />

          {persons}
        </div>
    );
  }
}

export default App;