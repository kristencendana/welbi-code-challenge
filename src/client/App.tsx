import React, {useEffect} from 'react';
import ComponentContainer from './containers/ComponentContainer';
import Navbar from './components/Navbar';
const App = () => {

  return (
    <div className="app">
      <header>Today's Programs</header>
      <p>This works! HELLO HELLO what's up hello hello </p>
      {/* an array list of <Programs />*/}
      <Navbar/>
      <ComponentContainer/>
    </div>

  )
}

export default App;