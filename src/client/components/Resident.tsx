import React from 'react';
import { useDataContext } from '../contexts/DataContext';
import { useNavigate } from 'react-router-dom';

const Resident = (props:any) => {
 
  const {residents} = useDataContext();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/resident/${props.residentId}`);
  }

  const resident = residents.filter((resident) => {
    return resident.id === Number(props.residentId);
  })

  return (
    <div>
      {/* <h1 onClick={handleClick} > Resident Name </h1> */}
      <h1 onClick={handleClick}>{resident[0].name}</h1>
    </div>
  )
}

export default Resident;