import React, {useEffect} from 'react';
import Resident from './Resident';
import { useDataContext } from '../contexts/DataContext';
import { useParams } from 'react-router-dom';
const Residents = () => {
  
  const {programs, residents, fetchResidents} = useDataContext();
  const {programId} = useParams();
  // use params
  // filter grab only the param id of 109 and grab the attendees
  console.log(programId);
  const result = [];
  if (!programId){
    console.log(residents);
    for (let resident of residents){
      console.log(resident)
      result.push(<Resident key={resident.id}residentId={resident.id} />)
    } 
  } else {
  const program = programs.filter((program) => {
    return program.id === Number(programId);
  })
  // after getting the program, get the attendance
  const attendees = program[0].attendance;
  for (let i = 0; i < attendees.length; i++){
    result.push(<Resident key={attendees[i].residentId}residentId={attendees[i].residentId} />)
  }
}
  // const residentIds = attendees.map((attendee) => attendee.residentId)
  // const resident = residents.filter((resident) => {
  //   return resident.id === Number(residentId);
  // })

  // console.log(residents);
  // const residentsList = [];
  // for (let attendee of attendees){
  //   const resident = residents.filter((resident) => {
  //       console.log(resident);
  //       // console.log(resident.id)
  //       // console.log(Number(props.residentId));
  //       return resident.id === Number(attendee.residentId);
  //     })
  //     console.log(resident);
  //     console.log(resident[0]);
  //     residentsList.push(<Resident name={resident[0].name}residentId={attendee.residentId} />)
  // }

  // const result = [];
  // for (let i = 0; i < attendees.length; i++){
  //   result.push(<Resident residentId={attendees[i].residentId} />)
  // }

  return (
    <div>
      {result}
      {/* {all && result} */}
    </div>
  )
}

export default Residents;