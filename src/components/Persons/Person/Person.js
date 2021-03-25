import React, {Component} from 'react';
import classes from './Person.module.css'

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className={classes.Person}>
                <div onClick={this.props.click}>My name is {this.props.name} and I'm {this.props.age} years old</div>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.textChange} value={this.props.name}/>
            </div>
        )
    };
}

export default Person;