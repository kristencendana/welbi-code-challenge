import React, { useEffect, useState } from 'react';
import { useDataContext } from '../contexts/DataContext';

import Program from './Program';
const Programs = () => {
  // upon load, we want to fetch programs (update programs state then utilize programs array)
  const {fetchResidents, fetchPrograms, programs, residents} = useDataContext();
  // upon load, we want to fetch programs (update programs state then utilize programs array)
  useEffect(() => {
    fetchResidents();
    fetchPrograms();
  }, [])

  useEffect(() => {
    // fetchPrograms();
    // fetchResidents();
    console.log(programs);
  }, [programs])

  // pass attendance, 
  return (
    <div>
      <button>Add New Program</button>
      {programs.map((program) => (
        <Program name={program.name} programId={program.id} attendance={program.attendance}/>
      ))}
    </div>
  )
}

export default Programs;