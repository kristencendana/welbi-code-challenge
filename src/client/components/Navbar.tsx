import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Navbar = () => {


  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/allresidents`);
  // }

  return (
    <div>
      {/* <a href="/">Programs</a> */}
      {/* <Button variant="contained" href="/">Programs</Button>
      <Button variant="contained" href="/allresidents"><p>Residents</p></Button> */}
      <Link style={{textDecoration: 'none'}} to="/">
        <Button variant="contained">Programs</Button>
      </Link>
      <Link style={{textDecoration: 'none'}} to="/allresidents">
        <Button variant="contained">Residents</Button>
      </Link>
      {/* <a onClick={handleClick}>Residents</a> */}
      {/* <p to="/allresidents "onClick={handleClick}>Residents</p> */}
    </div>
  )
}

export default Navbar;