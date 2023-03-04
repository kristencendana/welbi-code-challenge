import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Navbar = () => {


  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/allresidents`);
  // }

  return (
    <div>
      {/* <a href="/">Programs</a> */}
      <Link to="/">
        <p>Programs</p>
      </Link>
      <Link to="/allresidents">
        <p>Residents</p>
      </Link>
      {/* <a onClick={handleClick}>Residents</a> */}
      {/* <p to="/allresidents "onClick={handleClick}>Residents</p> */}
    </div>
  )
}

export default Navbar;