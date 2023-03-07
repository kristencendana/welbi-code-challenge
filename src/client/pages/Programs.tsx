import React, { useEffect, useState } from 'react';
import { ProgramInterface, ProgramOutputInterface, useDataContext } from '../contexts/DataContext';
import ProgramDialog from '../components/dialogs/ProgramsDialog';
import Button from '@mui/material/Button';
import ProgramsTable from '../components/tables/ProgramsTable';

const Programs = () => {
  // upon load, we want to fetch programs (update programs state then utilize programs array)
  const {fetchResidents, fetchPrograms, addProgram, programs} = useDataContext();
  // upon load, we want to fetch programs (update programs state then utilize programs array)
  useEffect(() => {
    fetchResidents();
    fetchPrograms();
  }, []);

  useEffect(() => {
  }, [programs]);
  
  // const programsList = [];
  // for (let programId in programs){
  //   const program = programs[programId];
    // console.log(programId);
    // programsList.push(<Program key={programId} programId={programId} programObj={programs[programId]}/>);
    // programsList.push(<TableComponent key={programId} name={program.name} dimension={program.dimension} tags={program.tags} location={program.location} facilitators={program.facilitators} />);
  // }
  // for (let residentId in programs){
  //   console.log(residentId);
  //   programsList.push(<Program id={residentId} name={programs[residentId].name}/>);
  // }

  return (
    <div>
      {/* <h1 >Add New Program</h1> */}
      {/* <Button variant="contained" onClick={handleClick}>Add New Program</Button> */}
      <ProgramDialog />
      <ProgramsTable />
      {/* {programsList} */}
    </div>
  )
}

export default Programs;