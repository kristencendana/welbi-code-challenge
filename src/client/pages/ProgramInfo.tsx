import React, { useEffect } from 'react';
import {  useDataContext } from '../contexts/DataContext';
import { useParams } from 'react-router-dom';
import ResidentsTable from '../components/tables/ResidentsTable';
import ProgramInfoDialog from '../components/dialogs/ProgramInfoDialog';
import {AttendeeOutputInterface} from '../types';

const ProgramInfo = () => {
  // grabbing state from context
  const {programs} = useDataContext();
  // rerender when changes with programs state object
  useEffect(() => {
  }, [programs])
  
  // accessing programId via query params from previous page's useNavigate hook
  const {programId} = useParams();

  const residentsList = [];
  let programName = [];

  // ensuring programId is not undefined
  if (programId){
    // if programId is truthy, access and grab the values from
    // the state object with key as programId and push component with attribute
    programName.push(programs[programId].name);
    
    if (programs[programId].attendance.length){
      // residentsList.push("Has length.");
      residentsList.push(<ResidentsTable key={programId} programId={programId}/>);
    } else {
      residentsList.push("No current attendees.");
    }
  }

  return (
    <div>
      <div className="title">
        <div>Program Name: {programName}</div>
        <ProgramInfoDialog programId={programId}/>
      </div>
      {residentsList}
    </div>
  )
}

export default ProgramInfo;