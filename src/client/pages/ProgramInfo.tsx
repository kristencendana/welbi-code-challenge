// import button, table
import React, {useEffect} from 'react';
import Resident from '../components/Resident';
import { useDataContext } from '../contexts/DataContext';
import { useParams } from 'react-router-dom';

const ProgramInfo = () => {
  
  const {programs, residents, addResidentToProgram} = useDataContext();
  const {programId} = useParams();
  
  console.log(programId);
  const residentsList = [];

  // ensuring programId is not undefined
  if (programId){
    // grab the program's array attendance with query param programId
    const attendees = programs[programId].attendance;
    console.log(attendees);
    
    for (let i = 0; i < attendees.length; i++){
      const residentId = String(attendees[i].residentId);
      residentsList.push(<Resident key={residentId} residentId={residentId} residentObj={residents[residentId]} />)
    }
  }

  // onclick add resident to program here
  // addResidentToProgram(
  //   1234,
  //   {
  //     residentId: 4,
  //     status: "Active"
  //   });

  return (
    <div>
      <h1 onClick={() => addResidentToProgram}>Add Resident to Program</h1>
      {residentsList}
    </div>
  )
}

export default ProgramInfo;