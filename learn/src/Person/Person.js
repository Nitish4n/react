import React from 'react';
import './Person.css';


const person = (prop) => {
    return (
        <div>
            <p className="person">Hello I am {prop.name} and my age is {prop.age}</p>
            <p>{prop.children}</p>
        </div>
    );
};


export default person;