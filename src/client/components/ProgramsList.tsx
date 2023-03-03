import React, { useEffect, useState } from 'react';
import Program from './Program';
const ProgramsList = () => {

// Upon load, invoke fetchAuthentication
useEffect(() => {
  fetchAuthentication();
  fetchResidents();
  fetchPrograms();

}, []);

// after fetching data, update the state array
const [programs, setPrograms] = useState([]);
const [residents, setResidents] = useState([]);

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
// 34b37cc0-5abd-4b4d-aca4-ddb322e49277
// Functionality for get request to receive residents
const fetchResidents = ():void => {
  fetch('https://welbi.org/api/residents', {
    headers: {
      Authorization: `Bearer 34b37cc0-5abd-4b4d-aca4-ddb322e49277`}
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
      Authorization: `Bearer 34b37cc0-5abd-4b4d-aca4-ddb322e49277`}
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
      Authorization: `Bearer 34b37cc0-5abd-4b4d-aca4-ddb322e49277`},
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