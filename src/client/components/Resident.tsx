import React from 'react';
import { useDataContext } from '../contexts/DataContext';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Resident = (props:any) => {
 
  const {residents} = useDataContext();
  const {residentId} = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/residentinfo/${props.residentId}`);
  }

  // const resident = residents.filter((resident) => {
  //   return resident.id === Number(residentId);
  // })
  // console.log(residents);

  return (
    <div>
      <h1 onClick={handleClick}>Need Name Somehow</h1>
    </div>
  )
}

export default Resident;