import React, { useEffect, useState } from 'react';
import { ProgramInterface, ProgramOutputInterface, useDataContext } from '../contexts/DataContext';
import Program from '../components/Program';
import Button from '@mui/material/Button';
import ProgramsTable from '../components/ProgramsTable';

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

  const handleClick = () => {

    // upon click, open up modal component
    // when clicked, we want to receive data from input form
    // clean up the data to what we like and then invoke addProgram
    const test : ProgramOutputInterface = 
    {
      allDay: false,
      createdAt: "2023-02-07T06:16:24.847Z",
      dimension: "Intellectual",
      end: "2009-11-12T20:00:00.000Z",
      facilitators: ['Abby'],
      hobbies: ['Debate', 'Public Speaking'],
      levelOfCare: ['INDEPENDENT'],
      location: "Library",
      name: "Reading",
      start: "2009-11-12T19:00:00.000Z",
      tags: ['outing'],
      updatedAt: "2023-02-07T06:16:24.847Z",
      isRepeated: false
    };
    addProgram(test);
  }
  
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
      <Button variant="contained" onClick={handleClick}>Add New Program</Button>
      <ProgramsTable />
      {/* {programsList} */}
    </div>
  )
}

export default Programs;