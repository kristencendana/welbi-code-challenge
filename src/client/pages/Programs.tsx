import React, { useEffect, useState } from 'react';
import { ProgramInterface, ProgramOutputInterface, useDataContext } from '../contexts/DataContext';
import Program from '../components/Program';

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
      location: "Gymnasium",
      name: "Exercise",
      start: "2009-11-12T19:00:00.000Z",
      tags: ['outing'],
      updatedAt: "2023-02-07T06:16:24.847Z",
      isRepeated: false
    };
    addProgram(test);
  }
  
  const programsList = [];
  for (let programId in programs){
    // console.log(programId);
    programsList.push(<Program key={programId} programId={programId} programObj={programs[programId]}/>);
  }

  // for (let residentId in programs){
  //   console.log(residentId);
  //   programsList.push(<Program id={residentId} name={programs[residentId].name}/>);
  // }

  return (
    <div>
      <h1 onClick={handleClick}>Add New Program</h1>
      {programsList}
    </div>
  )
}

export default Programs;