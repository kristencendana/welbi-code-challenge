// Types interface for the Context
export type DataContextType = {
  programs: ProgramsStateInterface
  residents: ResidentsStateInterface
  fetchResidents: () => void;
  fetchPrograms: () => void;
  addProgram: (program: ProgramOutputInterface) => void;
  addResident: (resident: ResidentOutputInterface) => void;
  addResidentToProgram: (programId:number, attendee: AttendeeOutputInterface) => void;
}
// Types interface for Program State (nested object).
export interface ProgramsStateInterface {
  [key: string]: ProgramInterface
};
// Types interface for Program Object
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
}
// Types for expected program fields for post request
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
// Types for expected attendee fields for post request
export interface AttendeeOutputInterface {
  residentId: number
  status: String
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
// Types interface for Resident State (nested object).
export interface ResidentsStateInterface {
  [key: string]: ResidentInterface;
};
// Types interface for Resident Object 
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