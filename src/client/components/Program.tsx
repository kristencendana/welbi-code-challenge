import React from 'react';
import { ProgramInterface, useDataContext } from '../contexts/DataContext';
import Resident from './Resident'
import { useNavigate } from 'react-router-dom';

const Program = (props: any) => {

  const {programs} = useDataContext();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/residents/${props.programId}`);
  }

  return (
    <div>
      <h1 onClick={handleClick}>{props.name}</h1>
    </div>
  )

}

export default Program;