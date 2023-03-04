import React, { createContext, useContext, useState } from 'react';
import { Program } from 'typescript';

// Types interface for the Context
export type DataContextType = {
  programs: ProgramInterface[]
  residents: ResidentInterface[]
  // fetchAuthorization: () => void; // DO I NEED TO HAVE THIS HERE
  fetchResidents: () => void;
  fetchPrograms: () => void;
  addProgram: (program: ProgramInterface) => void;
  addResident: (resident: ResidentDictionaryInterface) => void;
  addResidentToProgram: (program:ProgramInterface, resident: ResidentDictionaryInterface) => void;
}

// Types interface for Program Object.
export interface ProgramInterface {
  id: number
  name: string
  location: string
  attendance: AttendeeInterface[]
  facilitators: string[]
  start: string
}

// Types interface for Attendee Object.
export interface AttendeeInterface {
  programId: number
  residentId: number
  status: string
}
// Types interface for Resident Object.
export interface ResidentDictionaryInterface {
  residentId: {
    id: number
    status: string
    name: string
    room: string
  }
}

// Types interface for Resident Object.
export interface ResidentInterface {
  id: number
  status: string
  name: string
  room: string
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
  const [programs, setPrograms] = React.useState<ProgramInterface[]>([]);
  const initialState = {residentId: {id:0, name: "Kristen", status:"Active", room:"100"}}
  const [residents, setResidents] = React.useState<ResidentInterface[]>([]);

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
        console.log(data);
      })
      .catch(() => {
        console.log("Error in fetch authorization");
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
        setPrograms(data);
        // console.log(data);
        // we need to store this data into state using context API
      })
      .catch(() => {
        console.log("Error in fetch programs");
      })
    }
  // Functionality for get request to receive residents
  const fetchResidents = ():void => {
    fetch('https://welbi.org/api/residents', {
      headers: {
        Authorization: `Bearer 34b37cc0-5abd-4b4d-aca4-ddb322e49277`}
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setResidents(data);
      })
      .catch(() => {
        console.log("Error in fetch residents");
      })
    }

  // Functionality for post request to add programs
  const addProgram = (program: ProgramInterface):void => {
    fetch('https://welbi.org/api/programs', {
      method: 'POST',
      headers: {
        Authorization: `Bearer 34b37cc0-5abd-4b4d-aca4-ddb322e49277`},
      body: JSON.stringify({ "email": "kristencendana@gmail.com" })
    })
      .then(response => {
        console.log(response.status)
        if (response.status === 200){
        return response.json()
        }
      })
      .then(data => {
        console.log(data);
      })
      .catch(() => {
        console.log("Error in add program");
      })
    }

  // Functionality for post request to add resident
  const addResident = (resident: ResidentDictionaryInterface):void => {
    fetch('https://welbi.org/api/programs', {
      method: 'POST',
      headers: {
        Authorization: `Bearer 34b37cc0-5abd-4b4d-aca4-ddb322e49277`},
      body: JSON.stringify({ "Kristen": "kristencendana@gmail.com" })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(() => {
        console.log("Error in add resident");
      })
    }

    // Functionality for post request to add resident to program
  const addResidentToProgram = (program: ProgramInterface, resident: ResidentDictionaryInterface):void => {
    const programId = program.id;
    fetch(`https://welbi.org/api/programs/[${programId}]/attend`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer 34b37cc0-5abd-4b4d-aca4-ddb322e49277`},
      body: JSON.stringify({ "email": "kristencendana@gmail.com" })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
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