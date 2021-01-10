import { Component } from 'react';
import './App.css';
import BasicInfo from './BasicInfo';

//Challenges folder follows the each step. 
//MEDIUM: Replace all of the hard-coded with data from ‘this.state.person’ in the constructor.  Then take the returned ‘div’ and create a component, pass state into it and import it as ‘BasicInfo’. (This challenge should not change the look of the page)



class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      person: {
        name: 'Rochelly',
        phoneNumber: 1234567890,
        birthDate: '01/01/1900'
      }
    }
  }

  render() {
    return(
      <div className="App">
        <h1>React Guided Inquiry 1</h1>

        <BasicInfo
          name={this.state.person.name}
          phoneNumber={this.state.person.phoneNumber}
          birthDate={this.state.person.birthDate}
        />

      </div>
    )
  }
}

export default App;
