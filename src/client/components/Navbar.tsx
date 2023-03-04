import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {


  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/allresidents`);
  // }

  return (
    <div>
      <a href="/">Programs</a>
      <a href="/allresidents">Residents</a>
    </div>
  )
}

export default Navbar;