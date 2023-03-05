import React from "react";
import { useParams, useLocation } from 'react-router-dom';
import { ResidentInterface, useDataContext } from "../contexts/DataContext";

const ResidentInfo = () => {

  const {residents} = useDataContext();
  const location = useLocation();

  // NEED TO HAVE OPTION TO ENROLL TO PROGRAM MODAL TO HAVE A LIST OF PROGRAMS OR SEARCH BOX
  return (
    <div>
      {/* Add Program for Resident */}
      {location.state.name}
      {/* {location.state.lastName} */}
    </div>
  )
}

export default ResidentInfo;