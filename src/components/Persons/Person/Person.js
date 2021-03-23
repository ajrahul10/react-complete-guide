import React from 'react';
import classes from './Person.module.css'

const Person = (props) => {
    console.log('[Person.js] rendering...');
    return (
        <div className={classes.Person}>
            <div onClick={props.click}>My name is {props.name} and I'm {props.age} years old</div>
            <p>{props.children}</p>
            <input type="text" onChange={props.textChange} value={props.name}/>
        </div>
    )
}

export default Person;