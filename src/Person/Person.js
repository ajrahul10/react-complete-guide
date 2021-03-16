import React from 'react';
import './Person.css'
import Radium from 'radium'

const Person = (props) => {

    const style = {
        '@media (min-width: 750px)': {
            width: '450px'
        }
    }

    return (
        <div className="person" style={style}>
            <div onClick={props.click}>My name is {props.name} and I'm {props.age} years old</div>
            <p>{props.children}</p>
            <input type="text" onChange={props.textChange} value={props.name}/>
        </div>
    )
}

export default Radium(Person);