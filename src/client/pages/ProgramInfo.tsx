import React from 'react';
import {  useDataContext } from '../contexts/DataContext';
import { useParams } from 'react-router-dom';
import ResidentsTable from '../components/tables/ResidentsTable';
import ProgramInfoDialog from '../components/dialogs/ProgramInfoDialog';
import {AttendeeOutputInterface} from '../types';

const ProgramInfo = () => {
  // grabbing state from context
  const {programs, addResidentToProgram} = useDataContext();
  // accessing programId via query params from previous page's useNavigate hook
  const {programId} = useParams();

  const residentsList = [];
  let programName = [];

  // ensuring programId is not undefined
  if (programId){
    // if programId is truthy, access and grab the values from
    // the state object with key as programId and push component with attribute
    programName.push(programs[programId].name);
    residentsList.push(<ResidentsTable programId={programId}/>);
  } else {
    residentsList.push(<ResidentsTable />);
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