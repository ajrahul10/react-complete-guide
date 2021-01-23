import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {

  const [personState, setPersonState] = useState({
    persons: [
      {name: 'Rahul', age: 27},
      {name: 'Sameer', age: 24},
      {name: 'Akshay', age: 26}
    ]
  })

  const [otherState, setOtherState] = useState('some other state');

  console.log(personState, otherState);

  const switchNameHandler = () => {
    //console.log('switch clicked');
    let s = {...personState};
    s.persons[2].name = 'Aditya';
    setPersonState(s);
  } 

  return (
    <div className="App">
      <h1>Hey man wassup!</h1>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age} />
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My hobbies include: Racing</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age} />
    </div>
  )
  
}

export default App;