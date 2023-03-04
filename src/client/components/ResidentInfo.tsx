import React from "react";
import { useParams } from 'react-router-dom';
import { useDataContext } from "../contexts/DataContext";

const ResidentInfo = () => {

  const {residents} = useDataContext();
  const {residentId} = useParams();

  const resident = residents.filter((resident) => {
    return resident.id === Number(residentId);
  })

  return (
    <div>
      {resident[0].name}
    </div>
  )
}

export default ResidentInfo;