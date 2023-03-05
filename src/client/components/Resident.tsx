import React from 'react';
import { ResidentInterface, useDataContext } from '../contexts/DataContext';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

type residentProps = {
  key: String
  residentId: string
  residentObj: ResidentInterface
}
const Resident = (props:residentProps) => {
 
  const {residents} = useDataContext();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/resident/${props.key}`, {state: props.residentObj});
    // navigate(`/resident/${props.residentId}`);
  }

  return (
    <div>
      <h1 onClick={handleClick}>{props.residentObj.name}</h1>
    </div>
  )
}

export default Resident;