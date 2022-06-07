import React from 'react';
import deviceImg from '../icons/device.png';
import { Box, Button, Container, Grid, Pagination, Typography } from '@mui/material';
import { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateDevice } from '../reducers/deviceSlice';
import { DEFAULT_LOCATIONS, DEFAULT_PLANS } from '../constants';

const DeviceListItem = ({ device }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-green-200 max-w-xl w-full rounded-lg shadow-lg p-4 flex md:flex-row flex-col">
        <div className="flex-1">
          <li className="text-purple-600 capitalize text-xl font-bold m-2 px-3 pt-3">
            {device.name}
          </li>
          <li
            className="text-purple-600 capitalize text-xl font-bold m-2 px-3 pt-3"
            onChange={() => dispatch(updateDevice({ ...device, power: !device.power }))}>
            <FormControlLabel
              sx={{
                display: 'block'
              }}
              control={<Switch checked={device.power} name="loading" color="primary" />}
              label="Power"
            />
          </li>
          <li className="text-purple-600 capitalize text-xl font-bold m-2 px-3 pt-3">
            <Autocomplete
              value={device.location}
              disablePortal
              id="combo-box-demo"
              options={DEFAULT_LOCATIONS}
              onChange={(e) => {
                dispatch(updateDevice({ ...device, location: e.target.textContent }));
              }}
              sx={{ width: 300 }}
              renderInput={(params) => {
                console.log(params);
                return <TextField {...params} label="Location" />;
              }}
            />
          </li>
          <li className="text-purple-600 capitalize text-xl font-bold m-2 px-3 pt-3">
            <Autocomplete
              value={device.plan?.name}
              disablePortal
              id="combo-box-demo"
              options={DEFAULT_PLANS.map((plan) => plan.name)}
              onChange={(e) => {
                console.log(e);
                dispatch(updateDevice({ ...device, plan: e.target.textContent }));
              }}
              sx={{ width: 300 }}
              renderInput={(params) => {
                console.log(params);
                return <TextField {...params} label="Plan" />;
              }}
            />
          </li>
        </div>
        <div className="md:px-2 mt-3 md:mt-0 items-center flex">
          <Link
            className="inline-block bg-indigo-800 border-solid border-2 border-light-blue-500 mx-5 mb-4 px-2 py-2 rounded-md"
            to={`/plans/${device.id}/`}>
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
