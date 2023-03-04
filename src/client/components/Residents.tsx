import React, {useEffect} from 'react';
import Resident from './Resident';
import { useDataContext } from '../contexts/DataContext';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

const Residents = () => {
  
  const {residents, addResident} = useDataContext();
  // use params
  // filter grab only the param id of 109 and grab the attendees

  const result = [];
    for (let resident of residents){
      console.log(resident)
      result.push(<Resident key={resident.id}residentId={resident.id} />)
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
      <h1 onClick={() => addResident}>Add New Resident</h1>
      {/* <h1 onClick={() => addResidentToProgram}>Add Resident to Program</h1> */}
      {result}
    </div>
  )
}

export default Residents;