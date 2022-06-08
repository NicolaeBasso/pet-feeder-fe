// import { Box } from '@mui/system';
import React from 'react';
import { Box, Button, Container, Grid, Pagination, Card, Typography } from '@mui/material';
import DeviceListItem from './DeviceListItem';
import deviceImg from '../icons/device.png';
import { useSelector, useDispatch } from 'react-redux';

export const Devices = () => {
  const devices = useSelector((state) => state.device.devices);

  console.log(devices);

  return (
    <>
      <div>
        <Typography>Your devices</Typography>
        <ul className="devicesList">
          <Card variant="outlined">
            {devices?.map((device) => (
              <DeviceListItem key={device.id} device={device} />
            ))}
          </Card>
        </ul>
      </div>
    </>
  );
};
