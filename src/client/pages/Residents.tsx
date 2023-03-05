import React, {useEffect} from 'react';
import Resident from '../components/Resident';
import { ResidentOutputInterface, useDataContext } from '../contexts/DataContext';

const Residents = () => {
  
  const {residents, addResident} = useDataContext();

  const residentsList = [];
    for (let residentId in residents){
      console.log(residentId)
      residentsList.push(<Resident key={residentId} residentId={residentId} residentObj={residents[residentId]} />)
    } 
  
    // const handleclick for add new resident
    const handleClick = () => {
    // data must be in this format:
    
    const test : ResidentOutputInterface = {
      ambulation: "CANE",
      birthDate: "1974-12-28T07:00:00.000Z",
      createdAt: "2009-09-17T04:44:10.000Z",
      firstName: "Tom",
      lastName: "Jerry",
      levelOfCare: "INDEPENDENT",
      moveInDate: "2009-09-17T07:00:00.000Z",
      name: "Tom Jerry",
      preferredName: "Tom",
      room: "1",
      status: "HERE",
      updatedAt: "2009-09-17T04:44:10.000Z"
    };
      addResident(test);

    }

  return (
    <div>
      <h1 onClick={handleClick}>Add New Resident</h1>
      {/* <h1 onClick={() => addResidentToProgram}>Add Resident to Program</h1> */}
      {residentsList}
    </div>
  )
}

export default Residents;