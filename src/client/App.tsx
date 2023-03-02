import React, {useEffect} from 'react';

const App = () => {

  // Upon load, invoke fetchAuthentication
  useEffect(() => {
    fetchAuthentication();
  }, []);

  // Functionality for post request to receive authentication token
  const fetchAuthentication = ():void => {
    fetch('https://welbi.org/api/start', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "email": "kristencendana@gmail.com" })
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      console.log(JSON.stringify(data));
    })
  }



  return (
    <div className="app">Hello React App!</div>
  )
}

export default App;