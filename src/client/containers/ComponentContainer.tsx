import React, {useEffect, useState} from 'react';
import ProgramsList from '../components/Programs';
import ResidentsList from '../components/Residents';

const ComponentContainer = () => {


  // contains all state (maybe do class component)
  // Upon load, invoke fetchAuthentication

  return (
    <div>
    Component Container
    <ProgramsList />
    <ResidentsList />
    </div>
  )
}

export default ComponentContainer;