import React, { Component } from 'react';
//Challenges folder follows the each step. 
// <p>Create a ‘constructor’ that takes in ‘props’ , call the ‘super()’ method, and set ‘this.state’ to an empty object inside of the ‘App’ class. Inside of ‘this.state’ create a ‘person’ property and set it to an empty object</p>


class Easy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {}
        }
    }
}



export default Easy;