import React, { useEffect, useState } from 'react';
import { useDataContext } from '../contexts/DataContext';
import Navbar from './Navbar';

import Program from './Program';
const Programs = () => {
  // upon load, we want to fetch programs (update programs state then utilize programs array)
  const {fetchResidents, fetchPrograms, addProgram, addResident, programs, residents} = useDataContext();
  // upon load, we want to fetch programs (update programs state then utilize programs array)
  useEffect(() => {
    fetchResidents();
    fetchPrograms();

    addResident({
      ambulation: "CANE",
      birthDate: "1974-11-20T07:00:00.000Z",
      createdAt: "2009-09-17T04:44:10.000Z",
      firstName: "Jeffrey",
      lastName: "Winger",
      levelOfCare: "INDEPENDENT",
      moveInDate: "2009-09-17T07:00:00.000Z",
      name: "Jeff Winger",
      preferredName: "Jeff",
      room: "204",
      status: "HERE",
      updatedAt: "2009-09-17T04:44:10.000Z"});
  }, [])

  useEffect(() => {
    // fetchPrograms();
    // fetchResidents();
    console.log(programs);
  }, [programs])
  console.log(programs)

  const handleClick = () => {

    // upon click, open up modal component
    // when clicked, we want to receive data from input form
    // clean up the data to what we like and then invoke addProgram

    // {
    //   allDay: false,
    //   createdAt: "2023-02-07T06:16:24.847Z",
    //   dimension: "Intellectual",
    //   end: "2009-11-12T20:00:00.000Z",
    //   facilitators: ['Abby'],
    //   hobbies: ['Debate', 'Public Speaking'],
    //   levelOfCare: 'INDEPENDENT',
    //   location: "Gymnasium",
    //   name: "Debate",
    //   recurrence: null,
    //   start: "2009-11-12T19:00:00.000Z",
    //   tags: ['outing'],
    //   updatedAt: "2023-02-07T06:16:24.847Z",
    //   isRepeated: false
    // }
    // addProgram();
  }
  // pass attendance, 
  return (
    <div>
      {/* <Navbar/> */}
      <h1 onClick={handleClick}>Add New Program</h1>
      {programs.map((program) => (
        <Program name={program.name} programId={program.id} attendance={program.attendance}/>
      ))}
    </div>
  )
}

export default Programs;