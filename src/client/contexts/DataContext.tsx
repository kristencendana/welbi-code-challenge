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
  addResident: (resident: ResidentInterface) => void;
  addResidentToProgram: (program:ProgramInterface, resident: ResidentInterface) => void;
}

// Types interface for Program Object.
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



// Types interface for Attendee Object.
export interface AttendeeInterface {
  programId: number
  residentId: number
  status: string
}
// Types interface for Resident Object.
// export interface ResidentDictionaryInterface {
//   residentId: {
//     id: number
//     status: string
//     name: string
//     room: string
//   }
// }

// Types interface for Resident Object.
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
        Authorization: `Bearer <token>`}
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
        Authorization: `Bearer <token>`}
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
        Authorization: `Bearer <token>`
      },
      body: JSON.stringify(program)
    })
      .then(response => {
        // console.log(response.status)
        // if (response.status === 200){
        return response.json()
        // }
      })
      .then(data => {
        console.log(data);
      })
      .catch(() => {
        console.log("Error in add program");
      })
    }

  // Functionality for post request to add resident
  const addResident = (resident: ResidentInterface):void => {
    fetch('https://welbi.org/api/residents', {
      method: 'POST',
      headers: {
        Authorization: `Bearer <token>`
      },
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
  const addResidentToProgram = (program: ProgramInterface, resident: ResidentInterface):void => {
    const programId = program.id;
    fetch(`https://welbi.org/api/programs/[${programId}]/attend`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer <token>`},
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