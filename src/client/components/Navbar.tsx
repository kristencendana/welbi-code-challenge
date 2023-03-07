import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import HouseRoundedIcon from '@mui/icons-material/HouseRounded';


const Navbar = () => {

  return (
    <div className='navbar'>
      <div className='welbi'>
        <HouseRoundedIcon fontSize="large" color="disabled" />
        <a className="welbi" href="/">Welbi</a>
      </div>
      <div className="links">
        <div className='programs'>
          <Link style={{textDecoration: 'none'}} to="/">
            <Button variant="contained" size="small" sx={{color: 'black', backgroundColor: 'lightgray', 
              ':hover': {
                bgcolor: 'white',
                color: 'black'
                },
                }}>Programs</Button>
          </Link>
        </div>
        <div>
          <Link style={{textDecoration: 'none'}} to="/allresidents">
            <Button variant="contained" size="small" sx={{color: 'black', backgroundColor: 'lightgray',
              ':hover': {
                bgcolor: 'white', 
                color: 'black'
                }
              }}>Residents</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;