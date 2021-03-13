import React from 'react';
import './Person.css'

const Person = (props) => {
    return (
        <div className="person">
            <div onClick={props.changeName}>My name is {props.name} and I'm {props.age} years old</div>
            <p>{props.children}</p>
            <input type="text" onChange={props.textChange} value={props.name}/>
        </div>
    )
}

export default Person;