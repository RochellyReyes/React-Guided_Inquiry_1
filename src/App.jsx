import React, { Component } from 'react';
import './App.css';
import BasicInfo from './BasicInfo';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      people: [
        {
          name: 'Rochelly',
          phoneNumber: ' 123-456-7890',
          birthDate: ' 01/01/1900'
        },
        {
          name: 'Ryan',
          phoneNumber: ' 111-111-1111',
          birthDate: ' 11/11/1911'
         },
         {
          name: 'Ritchy',
          phoneNumber: ' 222-222-2222',
          birthDate: ' 03/22/1922'
         },
         {
          name: 'Celio',
          phoneNumber: ' 333-333-3333',
          birthDate: ' 03/23/1933'
         }
      ]
    }
  }

  render() {
    const P = this.state.people.map((person, i)=> {
        return (
          <BasicInfo
            key={i}
            //key to id specific component 
            name={person.name}
            phoneNumber={person.phoneNumber}
            birthDate={person.birthDate} 
          />
        );
    })


    return(
      <div className="App">
        <h1>React Guided Inquiry 1</h1>
        {P}
      </div>
    )
  }
}

export default App;
