import React, { createContext, useContext, useState } from 'react';
import { Program } from 'typescript';
import {DataContextType, ProgramsStateInterface, 
  ResidentsStateInterface, ProgramOutputInterface,
  ResidentOutputInterface, AttendeeOutputInterface,
  AttendeeInterface} from '../types';

// Creating a data context to share to components with default being an empty object literal.
export const DataContext = React.createContext<DataContextType>({} as DataContextType);

// Exporting useDataContext so we can apply this function in other components.
export function useDataContext () {
  return useContext(DataContext);
}

// Props for our children parameter
type Props = {
  children?: React.ReactNode;
};

// Data provider to wrap our app
export const DataProvider: React.FC<Props> = ({children}) => {
  // Creating programs, residents, and functionality to update those states 
  // (both states initialized as an nested object default data).
  const initialProgramsState: ProgramsStateInterface = {};
  const initialProgram = {
    allDay: false,
    applicantId: null,
    attendance: [{programId: 1, residentId: 1, status: "Active"}],
    createdAt: "2023-02-07T06:16:24.847Z",
    dimension: "Intellectual",
    end: "2009-11-12T20:00:00.000Z",
    facilitators: ['Rec Aide'],
    hobbies: ['Debate', 'Public Speaking'],
    id: 1234,
    isRepeated: false,
    levelOfCare: ['INDEPENDENT', 'ASSISTED'],
    location: "Gymnasium",
    name: "Debate",
    parentId: null,
    recurrence: null,
    start: "2009-11-12T19:00:00.000Z",
    tags: ['outing'],
    updatedAt: "2023-02-07T06:16:24.847Z"
  }
  initialProgramsState[0] = initialProgram;
  
  const initialResidentsState: ResidentsStateInterface = {};
  const initialResident = {
    ambulation: "CANE",
    applicantId: null,
    attendance: [{programId: 1, residentId: 1, status: "Active"}],
    birthDate: "1974-12-28T07:00:00.000Z",
    createdAt: "2009-09-17T04:44:10.000Z",
    firstName: "Greatest",
    id: 63,
    lastName: "Ever",
    levelOfCare: "INDEPENDENT",
    moveInDate: "2009-09-17T07:00:00.000Z",
    name: "Kristen Cendana",
    preferredName: "Abby",
    room: "1",
    status: "HERE",
    updatedAt: "2009-09-17T04:44:10.000Z"
  }
  initialResidentsState[0] = initialResident;

  // using useState hook for programs and resident state objects
  const [programs, setPrograms] = React.useState<ProgramsStateInterface>(initialProgramsState);
  const [residents, setResidents] = React.useState<ResidentsStateInterface>(initialResidentsState);

  // Functionality for post request to receive authentication token
  const fetchAuthorization = ():void => {
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
        // console.log(data);
      })
      .catch(() => {
        console.log("Error in fetch authorization");
      })
  }

  // Functionality to submit project
  const submitFinish = ():void => {
    fetch('https://welbi.org/api/finish', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer <token>`
      },
      body: JSON.stringify({ "url": "https://github.com/kristencendana/welbi-code-challenge" })
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
      })
      .catch(() => {
        console.log("Error in fetch authorization");
      })
  }

  // Functionality for get request to receive programs
  const fetchPrograms = ():void => {
    fetch('https://welbi.org/api/programs', {
      headers: {
        Authorization: `Bearer <token>`}
    })
      .then(response => response.json())
      .then(programsArray => {
        // looping through data and adding data to object, then update state
        const programsObj:ProgramsStateInterface = {};
        for (let program of programsArray){
          programsObj[program.id] = program;
        }
        setPrograms(programsObj);
      })
      .catch(() => {
        console.log("Error in fetch programs");
      })
    }
  // Functionality for get request to receive residents
  const fetchResidents = ():void => {
    fetch('https://welbi.org/api/residents', {
      headers: {
        Authorization: `Bearer <token>`}
    })
      .then(response => response.json())
      .then(residentsArray => {
        // looping through data and adding data to object, then update state
        const residentsObj:ResidentsStateInterface = {};
        for (let resident of residentsArray){
          residentsObj[resident.id] = resident;
        }
        console.log(residentsObj)
        setResidents(residentsObj);
      })
      .catch(() => {
        console.log("Error in fetch residents");
      })
    }

  // Functionality for post request to add programs
  const addProgram = (program: ProgramOutputInterface):void => {
    fetch('https://welbi.org/api/programs', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
        Authorization: `Bearer <token>`},
      body: JSON.stringify(program)
    })
      .then(response => response.json())
      .then(data => {
        // grab given programId from argument, set key as id and data as value
        // create attendance key as empty array and create and set new object state
        const newPrograms: ProgramsStateInterface = {}
        const programId = data.id;
        newPrograms[programId] = data;
        newPrograms[programId].attendance = [];
        const newData = Object.assign({}, programs, newPrograms);
        setPrograms(newData);
      })
      .catch(() => {
        console.log("Error in add program");
      })
    }

  // Functionality for post request to add resident
  const addResident = (resident: ResidentOutputInterface):void => {
    fetch('https://welbi.org/api/residents', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
        Authorization: `Bearer <token>`},
      body: JSON.stringify(resident)
    })
      .then(response => response.json())
      .then(data => {
        const newResidents: ResidentsStateInterface = {}
        const residentId = data.id;
        newResidents[residentId] = data;
        const newData = Object.assign({}, residents, newResidents);
        setResidents(newData);
      })
      .catch(() => {
        console.log("Error in add resident");
      })
    }

    // Functionality for post request to add resident to program
  const addResidentToProgram = (programId: number, attendee: AttendeeOutputInterface):void => {

    fetch(`https://welbi.org/api/programs/${programId}/attend`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
        Authorization: `Bearer <token>`
      },
      body: JSON.stringify(attendee)
    })
      .then(response => response.json())
      .then(data => {
        // Update state of Programs and Residents:
        // make a copy of the programs object and residents object
        const newPrograms:ProgramsStateInterface = Object.assign({}, programs);
        const newResidents:ResidentsStateInterface = Object.assign({}, residents);
        // create attendance object without applicantId
        const newAttendee: AttendeeInterface = 
          {
            programId: programId,
            residentId: data.residentId,
            status: data.status
          };
        // append attendee to new program's attendance array
        newPrograms[programId].attendance.push(newAttendee);
        // append new program to resident's attendance array
        newResidents[data.residentId].attendance.push(newAttendee);
        // reset states calling setState functions
        setPrograms(newPrograms);
        setResidents(newResidents);
      })
      .catch(() => {
        console.log("Error in add resident to program");
      })
    }

  return (
    <DataContext.Provider value= {{programs, residents, fetchResidents, fetchPrograms, addProgram, addResident, addResidentToProgram}}>
        {children}
    </DataContext.Provider>
  )
}

export default DataProvider;