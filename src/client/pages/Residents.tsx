import React, {useEffect} from 'react';
import Resident from '../components/Resident';
import { ResidentOutputInterface, useDataContext } from '../contexts/DataContext';
import Button from '@mui/material/Button';
import ResidentsTable from '../components/ResidentsTable';

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
      <Button variant="contained" onClick={handleClick}>Add New Program</Button>
      <ResidentsTable />
    </div>
  )
}

export default Residents;