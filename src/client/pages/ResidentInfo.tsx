import React from "react";
import { useParams, useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { AttendeeOutputInterface, ResidentInterface, useDataContext } from "../contexts/DataContext";
import ResidentTable from '../components/tables/ResidentTable';

const ResidentInfo = () => {

  const {residents, addResidentToProgram} = useDataContext();
  const location = useLocation();
  const {id, name, firstName, lastName, birthDate, attendance, room, status } = location.state;
  const date = new Date(birthDate);
  console.log(date)
  console.log(date.toString())
  console.log(date.toDateString())
  // NEED TO HAVE OPTION TO ENROLL TO PROGRAM MODAL TO HAVE A LIST OF PROGRAMS OR SEARCH BOX
  const handleClick = () => {

    alert("button clicked in add program to resident")
    // const test: AttendeeOutputInterface = 
    //   {
    //     residentId: 70,
    //     status: "Active"
    //   }
    //   // programId is not defined... will figure this out after MVP
    //   if (location.state.programId){
    //     addResidentToProgram(Number(programId), test);
    //   }
    }
  
    return (
      <div>
        <h1>Resident Information</h1>
        {/* <Button variant="contained" onClick={handleClick}>Add Program to Resident</Button> */}
        <Box
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
      />
        <ResidentTable residentId={id} name={name} firstName={firstName} lastName={lastName} birthDate= {birthDate}
         room={room} status={status} />
         {/* programs={attendance} */}
        {/* {location.state.name} */}
        {/* {location.state.lastName} */}
    </div>
  )
}

export default ResidentInfo;