import React from 'react';
// import { ProgramInterface, useDataContext } from '../contexts/DataContext';
// import Resident from './Resident'
import { useNavigate } from 'react-router-dom';
import { ProgramInterface } from '../contexts/DataContext';

type propsType = {
  key: string
  programId: string
  programObj: ProgramInterface
}
const Program = (props: propsType) => {

  // const {programs} = useDataContext();
  // console.log(props);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/program/${props.programId}`);
  }

  return (
    <div>
      <h1 onClick={handleClick}>{props.programObj.name}</h1>
    </div>
  )

}

export default Program;