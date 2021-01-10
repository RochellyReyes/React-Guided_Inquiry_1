import React from 'react';
import './BasicInfo.css'

const BasicInfo = (props) => {
    return (
        <div className='BasicInfo'>
            <p>Name: {props.name}</p>
            <p>Phone Number:{props.phoneNumber} </p>
            <p>Birthdate:{props.birthDate} </p>
        </div>
    );
}

export default BasicInfo; 