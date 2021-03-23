import React from 'react';

import classes from './Cockpit.module.css';

const cockpit = (props) => {

    let btnClass = '';
    if(props.showPerson) {
        btnClass = classes.Red;
    }
    
    const assignedClasses = [];
    if(props.person.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if(props.person.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hello!</h1>
            <p className={assignedClasses.join(' ')}>{props.title}</p>
            <button 
            className={btnClass}
            onClick={props.togglePerson}>Toggle Person!</button>
        </div>
    );
}

export default cockpit;