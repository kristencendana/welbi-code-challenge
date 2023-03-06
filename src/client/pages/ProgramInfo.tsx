// import button, table
import React, {useEffect} from 'react';
// import Resident from '../components/Resident';
import { AttendeeOutputInterface, useDataContext } from '../contexts/DataContext';
import { useParams } from 'react-router-dom';
import ResidentsTable from '../components/ResidentsTable';
import Button from '@mui/material/Button';

const ProgramInfo = () => {
  
  const {programs, residents, addResidentToProgram} = useDataContext();
  const {programId} = useParams();

  const residentsList = [];

  // ensuring programId is not undefined
  if (programId){
  
    // const attendee = programs[programId].attendance;
    // // grab the program's array attendance with query param programId
    // // console.log(attendees);
    // if (attendee.length === 0){
    //   residentsList.push(<div>No Current Attendees</div>)
    residentsList.push(<ResidentsTable programId={programId}/>);
  } else {
    residentsList.push(<ResidentsTable />);
  }

  // onclick add resident to program here
  const handleClick = () => {

  const test: AttendeeOutputInterface = 
    {
      residentId: 70,
      status: "Active"
    }
    if (programId){
      addResidentToProgram(Number(programId), test);
    }
  }

  return (
    <div>
      {/* <h1 onClick={handleClick}>Add Resident to Program</h1> */}
      <Button variant="contained" onClick={handleClick}>Add Resident to Program</Button>
      {/* <ResidentsTable /> */}
      {/* <ResidentsTable programId={programId}/> */}
      {residentsList}
      {/* {ResidentsTable} */}
    </div>
  )
}

export default ProgramInfo;