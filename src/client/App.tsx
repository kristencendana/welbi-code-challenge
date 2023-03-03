import React, {useEffect} from 'react';
import ComponentContainer from './containers/ComponentContainer';
import Navbar from './components/Navbar';
const App = () => {

  return (
    <div className="app">
      <header>Welbi</header>
      <Navbar/>
      <ComponentContainer/>
    </div>

  )
}

export default App;