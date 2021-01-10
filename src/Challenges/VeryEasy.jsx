import { Component } from 'react';
import './App.css';
//Challenges folder follows the each step. 
//VERY EASY: Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.

class App extends Component {
  render() {
    return(
      <div className="App">
        <h1>React Guided Inquiry 1</h1>
        <h2>Very Easy Challenge</h2>
        <p>Inside of your ‘App’ class ‘render’ method, return a div with your basic information for example name, number, date of birth and etc. This div should be hard-coded to prepare for the Medium Challenge.</p>

        <div className="Person">
          <p>Name: Rochelly</p>
          <p>Number: 1234567890</p>
          <p>Birthdate: 01/01/1900</p>
        </div>
      </div>
    )
  }
}

export default App;
