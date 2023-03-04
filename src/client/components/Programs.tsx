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
    addProgram({
      allDay: false,
      applicantId: null,
      attendance: [
        {programId: 200, residentId: 1, status: 'Active'},
        {programId: 200, residentId: 2, status: 'Active'}
      ],
      createdAt: "2023-02-07T06:16:24.847Z",
      dimension: "Intellectual",
      end: "2009-11-12T20:00:00.000Z",
      facilitators: ['Abby'],
      hobbies: ['Debate', 'Public Speaking'],
      id: 500,
      levelOfCare: ['INDEPENDENT', 'ASSISTED'],
      location: "Gymnasium",
      name: "Debate",
      parentId: null,
      recurrence: null,
      start: "2009-11-12T19:00:00.000Z",
      tags: ['outing'],
      updatedAt: "2023-02-07T06:16:24.847Z",
      isRepeated: false
    });

    addResident({
      ambulation: "CANE",
      applicantId: null,
      attendance: [{programId: 100, residentId: 1, status: "Active"}],
      birthDate: "1974-11-20T07:00:00.000Z",
      createdAt: "2009-09-17T04:44:10.000Z",
      firstName: "Jeffrey",
      id:1,
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

  // pass attendance, 
  return (
    <div>
      {/* <Navbar/> */}
      <h1 onClick={() => addProgram}>Add New Program</h1>
      {programs.map((program) => (
        <Program name={program.name} programId={program.id} attendance={program.attendance}/>
      ))}
    </div>
  )
}

export default Programs;