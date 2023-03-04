// import button, table
import React, {useEffect} from 'react';
import Resident from '../components/Resident';
import { useDataContext } from '../contexts/DataContext';
import { useParams } from 'react-router-dom';

const ProgramInfo = () => {
  
  const {programs, residents, addResident, addResidentToProgram} = useDataContext();
  const {programId} = useParams();
  // use params
  // filter grab only the param id of 109 and grab the attendees
  console.log(programId);
  const result = [];

  const program = programs.filter((program) => {
    return program.id === Number(programId);
  })
  // after getting the program, get the attendance
  const attendees = program[0].attendance;
  for (let i = 0; i < attendees.length; i++){
    result.push(<Resident key={attendees[i].residentId}residentId={attendees[i].residentId} />)
  }

  return (
    <div>
      <h1 onClick={() => addResident}>Add New Resident</h1>
      <h1 onClick={() => addResidentToProgram}>Add Resident to Program</h1>
      {result}
    </div>
  )
}

export default ProgramInfo;