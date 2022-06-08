// import { Box } from '@mui/system';
import React from 'react';
import { Box, Button, Container, Grid, Pagination, Card, Typography } from '@mui/material';
import { DeviceListItem } from './DeviceListItem';
import deviceImg from '../icons/device.png';
import { useSelector, useDispatch } from 'react-redux';

export const Devices = () => {
  const devices = useSelector((state) => state.device.devices);

  return (
    <>
      <div>
        <Typography>Your devices</Typography>
        <ul className="deviceCard">
          {devices?.map((device) => (
            <DeviceListItem key={device.id} device={device} />
          ))}
        </ul>
      </div>
    </>
  );
};
