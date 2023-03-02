import React, { useEffect } from 'react';
import Program from './Program';
const ProgramsList = () => {

// Upon load, invoke fetchAuthentication
useEffect(() => {
  fetchAuthentication();
  fetchResidents();
  fetchPrograms();

}, []);

// programs 

// Functionality for post request to receive authentication token
const fetchAuthentication = ():void => {
  fetch('https://welbi.org/api/start', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "email": "kristencendana@gmail.com" })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(JSON.stringify(data));
    })
}

// Functionality for get request to receive residents
const fetchResidents = ():void => {
  fetch('https://welbi.org/api/residents', {
    headers: {
      Authorization: `Bearer <token>`}
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
  }
// Functionality for get request to receive programs
const fetchPrograms = ():void => {
  fetch('https://welbi.org/api/programs', {
    headers: {
      Authorization: `Bearer <token>`}
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);

      // we need to store this data into state using context API
    })
  }

  // Functionality for post request to add programs
const addProgram = ():void => {
  fetch('https://welbi.org/api/programs', {
    method: 'POST',
    headers: {
      Authorization: `Bearer <token>`},
    body: JSON.stringify({ "email": "kristencendana@gmail.com" })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
  }


  return (
    <div>
      <Program />
      <Program />
    </div>
  )
}

export default ProgramsList;