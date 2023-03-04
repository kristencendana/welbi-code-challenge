import React from "react";
import { useParams } from 'react-router-dom';
import { useDataContext } from "../contexts/DataContext";

const ResidentInfo = () => {

  const {residents} = useDataContext();
  const {residentId} = useParams();

  const resident = residents.filter((resident) => {
    return resident.id === Number(residentId);
  })

  // NEED TO HAVE OPTION TO ENROLL TO PROGRAM MODAL TO HAVE A LIST OF PROGRAMS OR SEARCH BOX
  return (
    <div>
      {/* Add Program for Resident */}
      {resident[0].name}
    </div>
  )
}

export default ResidentInfo;