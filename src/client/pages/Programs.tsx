import React, { useEffect } from 'react';
import { useDataContext } from '../contexts/DataContext';
import ProgramsDialog from '../components/dialogs/ProgramsDialog';
import ProgramsTable from '../components/tables/ProgramsTable';

const Programs = () => {
  // upon load, we want to fetch programs (update programs state then utilize programs array)
  const {fetchResidents, fetchPrograms, programs} = useDataContext();
  // upon load, we want to fetch programs (update programs state then utilize programs array)
  useEffect(() => {
    fetchResidents();
    fetchPrograms();
  }, []);

  // whenever programs state is changed, rerender component
  useEffect(() => {
  }, [programs]);

  return (
    <div>
      <h1>Today's Programs</h1>
      <ProgramsDialog />
      <ProgramsTable />
    </div>
  )
}

export default Programs;