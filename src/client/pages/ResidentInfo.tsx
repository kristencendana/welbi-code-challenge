import React from "react";
import { useParams, useLocation } from 'react-router-dom';
import { AttendeeOutputInterface, ResidentInterface, useDataContext } from "../contexts/DataContext";

const ResidentInfo = () => {

  const {residents, addResidentToProgram} = useDataContext();
  const location = useLocation();

  // NEED TO HAVE OPTION TO ENROLL TO PROGRAM MODAL TO HAVE A LIST OF PROGRAMS OR SEARCH BOX
  // const handleClick = () => {

  //   const test: AttendeeOutputInterface = 
  //     {
  //       residentId: 70,
  //       status: "Active"
  //     }
  //     // programId is not defined... will figure this out after MVP
  //     if (location.state.programId){
  //       addResidentToProgram(Number(programId), test);
  //     }
  //   }
  
    return (
      <div>
        {/* <h1 onClick={handleClick}>Add Resident to Program</h1> */}
        {location.state.name}
        {/* {location.state.lastName} */}
    </div>
  )
}

export default ResidentInfo;