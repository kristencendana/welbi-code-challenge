import React, { createContext, useContext, useState } from 'react';
import { Program } from 'typescript';

// Types interface for the Context
export type DataContextType = {
  programs: ProgramsStateInterface
  residents: ResidentsStateInterface
  // fetchAuthorization: () => void; // DO I NEED TO HAVE THIS HERE
  fetchResidents: () => void;
  fetchPrograms: () => void;
  addProgram: (program: ProgramOutputInterface) => void;
  addResident: (resident: ResidentOutputInterface) => void;
  addResidentToProgram: (programId:number, attendee: AttendeeOutputInterface) => void;
}

// Types interface for Program Object.
export interface ProgramsStateInterface {
  [key: string]: ProgramInterface
};

export interface ProgramInterface {
  allDay: Boolean
  applicantId: null
  attendance: AttendeeInterface[]
  createdAt: String
  dimension: String
  end: String
  facilitators: String[]
  hobbies: String[]
  id: number
  isRepeated: Boolean
  levelOfCare: String[]
  location: String
  name: String
  parentId: null
  recurrence: null
  start: String
  tags: String[]
  updatedAt: String
  // isRepeated: boolean
}

export interface ProgramOutputInterface {
  allDay: Boolean
  createdAt: String
  dimension: String
  end: String
  facilitators: String[]
  hobbies: String[]
  isRepeated: Boolean
  levelOfCare: String[]
  location: String
  name: String
  recurrence?: null
  start: String
  tags: String[]
  updatedAt: String
}

// Types interface for Attendee Object.
export interface AttendeeInterface {
  programId: number
  residentId: number
  status: String
}

export interface AttendeeOutputInterface {
  residentId: number
  status: String
}

// Types interface for Resident Object.
export interface ResidentsStateInterface {
  [key: string]: ResidentInterface;
};

export interface ResidentInterface {
    ambulation: String,
    applicantId: null,
    attendance: AttendeeInterface[],
    birthDate: String,
    createdAt: String,
    firstName: String,
    id: number,
    lastName: String,
    levelOfCare: String,
    moveInDate: String,
    name: String,
    preferredName: String,
    room: String,
    status: String,
    updatedAt: String
}

export interface ResidentOutputInterface {
  ambulation: String,
  birthDate: String,
  createdAt: String,
  firstName: String,
  lastName: String,
  levelOfCare: String,
  moveInDate: String,
  name: String,
  preferredName: String,
  room: String,
  status: String,
  updatedAt: String
}

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

export const DataProvider: React.FC<Props> = ({children}) => {
  // Creating programs, residents, and functionality to update those states (both states initialized as an empty array).
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
  // Functionality for get request to receive programs
  const fetchPrograms = ():void => {
    fetch('https://welbi.org/api/programs', {
      headers: {
        Authorization: `Bearer <token>`}
    })
      .then(response => response.json())
      .then(programsArray => {

        const programsObj:ProgramsStateInterface = {};
        for (let program of programsArray){
          programsObj[program.id] = program;
        }
        console.log(programsObj)
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
        const newPrograms: ProgramsStateInterface = {}
        const programId = data.id;
        newPrograms[programId] = data;
        const newData = Object.assign({}, programs, newPrograms);
        // const newData = Object.assign(programs, newProgram);
        console.log(newData)
        
        setPrograms(newData);
        // this doesn't automatically refresh for some reason??
        // fetchPrograms();
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
        console.log(newData)
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