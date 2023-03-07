import React from "react";
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import ResidentTable from '../components/tables/ResidentTable';

const ResidentInfo = () => {

  // accessing passed down state object via useNavigate and useLocation hooks
  const location = useLocation();
  const {id, name, firstName, lastName, birthDate, room, status } = location.state;

  return (
    <div>
      <div className="title">
        <div>Resident Profile</div>
      </div>
      <div className='resident-info'>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="Image."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />
        <ResidentTable residentId={id} name={name} firstName={firstName} lastName={lastName} birthDate= {birthDate}
          room={room} status={status} />
      </div>
    </div>
  )
}

export default ResidentInfo;