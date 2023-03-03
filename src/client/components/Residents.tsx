import React, {useEffect} from 'react';
import Resident from './Resident';
import { useDataContext } from '../contexts/DataContext';
import { useParams } from 'react-router-dom';
const Residents = () => {
  
  const {programs, residents, fetchResidents} = useDataContext();
  const {programId} = useParams();
  console.log(programId);

  // upon load, we want to fetch programs (update programs state then utilize programs array)
  useEffect(() => {
    fetchResidents();
    // fetchResidents();
  }, [])

  useEffect(() => {
    // fetchPrograms();
    // fetchResidents();
    console.log(residents);
  }, [residents])
  
  // use params
  // filter grab only the param id of 109 and grab the attendees
  const program = programs.filter((program) => {
    return program.id === Number(programId);
  })
  // after getting the program, get the attendance
  const attendees = program[0].attendance;
  // const residentIds = attendees.map((attendee) => attendee.residentId)
  // const resident = residents.filter((resident) => {
  //   return resident.id === Number(residentId);
  // })

  // const result = [];
  // for (let i = 0; i < attendees.length; i++){
  //   result.push(<Resident name={}residentId={attendees[i].residentId} />)
  // }

  return (
    <div>
      {attendees.map((attendee) => <Resident residentId={attendee.residentId}/>)}
    </div>
  )
}

export default Residents;