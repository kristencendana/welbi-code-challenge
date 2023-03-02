import React, {useEffect} from 'react';
import ProgramsList from './components/ProgramsList';

const App = () => {

  return (
    <div className="app">
      <header>Today's Programs</header>
      <p>This works! HELLO HELLO what's up hello hello </p>
      {/* an array list of <Programs />*/}
      <ProgramsList />
    </div>

  )
}

export default App;