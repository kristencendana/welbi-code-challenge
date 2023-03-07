import React from 'react';
import ResidentsTable from '../components/tables/ResidentsTable';
import ResidentsDialog from '../components/dialogs/ResidentsDialog';

// Component for all residents page
const Residents = () => {

  return (
    <div>
      <div className="title">
        <div>All Residents</div>
        <ResidentsDialog />
      </div>
      <ResidentsTable />
    </div>
  )
}

export default Residents;