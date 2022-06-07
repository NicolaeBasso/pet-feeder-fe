import React from 'react';
import deviceImg from '../icons/device.png';
import { Box, Button, Container, Grid, Pagination, Typography } from '@mui/material';

const DeviceListItem = ({ device }) => {
  return (
    <>
      <div className="bg-green-200 max-w-xl w-full rounded-lg shadow-lg p-4 flex md:flex-row flex-col">
        <div className="flex-1">
          <li className="text-purple-600 capitalize text-xl font-bold m-2 px-3 pt-3">
            {device.name}
          </li>
          <li className="text-gray-600 pb-3 m-2 px-3 mb-1">{device.on}</li>
        </div>
        <div className="md:px-2 mt-3 md:mt-0 items-center flex">
          <Link
            className="inline-block bg-indigo-800 border-solid border-2 border-light-blue-500 mx-5 mb-4 px-2 py-2 rounded-md"
            to={`/pets/${device.id}/`}>
            <button className="text-white capitalize text-m m-2 px-3 ">See plan</button>
          </Link>
        </div>
      </div>
      {/* <Grid lg={4} md={6} xs={12}>
        <img src={deviceImg} />
        <Box className="deviceName" mb={3} mt={3} width="36%">
          <Typography variant="h4" fontWeight="bold" mb={3} color="#0096c7">
            Bellas feeder
          </Typography>
        </Box>
        <Box ml={12} mt={3} width="30%">
          <Button fullWidth variant="contained" type="submit">
            Turn on
          </Button>
        </Box>
        <Box ml={12} mt={3} width="30%">
          <Button fullWidth variant="contained" type="submit">
            See plan
          </Button>
        </Box>
        <Box ml={12} mt={3} width="30%">
          <Button fullWidth variant="contained" type="submit">
            See pet
          </Button>
        </Box>
        <Box ml={12} mt={3} width="30%">
          <Button fullWidth variant="contained" type="submit">
            See location
          </Button>
        </Box>
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <img src={deviceImg} />
        <Box className="deviceName" mb={3} mt={3} width="36%">
          <Typography variant="h4" fontWeight="bold" mb={3} color="#0096c7">
            Bellas feeder
          </Typography>
        </Box>
        <Box ml={12} mt={3} width="30%">
          <Button fullWidth variant="contained" type="submit">
            Turn on
          </Button>
        </Box>
        <Box ml={12} mt={3} width="30%">
          <Button fullWidth variant="contained" type="submit">
            See plan
          </Button>
        </Box>
        <Box ml={12} mt={3} width="30%">
          <Button fullWidth variant="contained" type="submit">
            See pet
          </Button>
        </Box>
        <Box ml={12} mt={3} width="30%">
          <Button fullWidth variant="contained" type="submit">
            See location
          </Button>
        </Box>
      </Grid>
      <Grid lg={4} md={6} xs={12}>
        <img src={deviceImg} />
        <Box className="deviceName" mb={3} mt={3} width="36%">
          <Typography variant="h4" fontWeight="bold" mb={3} color="#0096c7">
            Bellas feeder
          </Typography>
        </Box>
        <Box ml={12} mt={3} width="30%">
          <Button fullWidth variant="contained" type="submit">
            Turn on
          </Button>
        </Box>
        <Box ml={12} mt={3} width="30%">
          <Button fullWidth variant="contained" type="submit">
            See plan
          </Button>
        </Box>
        <Box ml={12} mt={3} width="30%">
          <Button fullWidth variant="contained" type="submit">
            See pet
          </Button>
        </Box>
        <Box ml={12} mt={3} width="30%">
          <Button fullWidth variant="contained" type="submit">
            See location
          </Button>
        </Box>
      </Grid> */}
    </>
  );
};

export default DeviceListItem;
