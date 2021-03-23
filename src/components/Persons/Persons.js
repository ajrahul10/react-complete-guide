import React from 'react';

import Person from './Person/Person'

const persons = (props) => {
        console.log('[Persons.js] renders...');
        return props.person.map((person, index) => 
                <Person 
                key={person.id}
                name={person.name} 
                age={person.age}
                click={() => props.clicked(index)} 
                textChange={(event) => props.changed(event, person.id)}/>
)};

export default persons;