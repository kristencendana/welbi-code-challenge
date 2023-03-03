import React from 'react';
import Resident from './Resident';
const ResidentsList = () => {

  // pass down to resident??
  return (
    <div>
      Residents List
      <button> Add New Resident </button>
      <Resident />
    </div>
  )
}

export default ResidentsList;