// import React, { Component } from 'react';
import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

 const App = () => {

  const [personState, setPersonState] = useState({
    persons : [
      {name: 'Nikk', age: 32},
      {name: 'Manu', age: 39},
      {name: 'Bhim', age: 12},
    ]
  });

  const [ otherState, setOtherState ] = useState("Some Other Value");

  console.log(personState, otherState);

  const switchNameHandler = () => {
    setPersonState({
      persons : [
        {name: 'Nitish kumar', age: 32},
        {name: 'Manish Kumar', age: 39},
        {name: 'Ashish kumar', age: 12},
      ]
    })
  }


   return (
     <div className="App">
      <h1>Hello It is working !</h1>
      <button onClick={switchNameHandler}>Change Name</button>
       <Person name={personState.persons[0].name} age={personState.persons[0].age} >Hobbies:  Coding</Person>
       <Person name={personState.persons[1].name} age={personState.persons[1].age} ></Person>
       <Person name={personState.persons[2].name} age={personState.persons[2].age} >Hobbies:  Cricket</Person>
     </div>
  )
};



//class based App using component using state to manage data
/*
class App extends Component {


  state = {
    persons : [
      {name: 'Nikk', age: 32},
      {name: 'Manu', age: 39},
      {name: 'Bhim', age: 12},
    ]
  }

  switchNameChange= () => {
    // console.log('ok Done');
    this.setState({
      persons : [
        {name: 'Nitish ', age: 23},
        {name: 'Himanshu', age: 26},
        {name: 'Ravi', age: 32},
      ]
    });
  }


  render() {
    return (
      <div className="App">
       <h1>Hello It is working !</h1>

       <button onClick={this.switchNameChange}>Change Name</button>
       <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >Hobbies:  Coding</Person>
       <Person name={this.state.persons[1].name} age={this.state.persons[1].age} ></Person>
       <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >Hobbies:  Cricket</Person>
       
     </div>
    )
  }
}
*/
export default App;
