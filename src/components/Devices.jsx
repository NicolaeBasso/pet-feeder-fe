// import { Box } from '@mui/system';
import React from 'react';
import { Box, Button, Container, Grid, Pagination, Typography } from '@mui/material';
import DeviceListItem from './DeviceListItem';
import deviceImg from '../icons/device.png';
import { useSelector, useDispatch } from 'react-redux';

// export const Devices = () => (
//   <>
//     <Box
//       component="main"
//       sx={{
//         flexGrow: 1,
//         py: 8
//       }}>
//       <Container maxWidth={false}>
//         <Box sx={{ pt: 3 }}>
//           <Grid container spacing={2} ml={12}></Grid>
//         </Box>
//         <Box
//           sx={{
//             display: 'flex',
//             justifyContent: 'center',
//             pt: 3
//           }}></Box>
//       </Container>
//     </Box>
//   </>
// );

export const Devices = () => {
  const devices = useSelector((state) => state.device.devices);

  return (
    <>
      <div>
        <h1 className="text-3xl font-semibold pb-4 text-green-700">Devices</h1>
        <ul className="">
          {devices?.map((device) => (
            <DeviceListItem key={device.id} device={device} />
          ))}
        </ul>
      </div>
    </>
  );
};
