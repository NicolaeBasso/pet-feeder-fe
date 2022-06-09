// import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { DeviceListItem } from './DeviceListItem';

export const Devices = () => {
  const devices = useSelector((state) => state.device.devices);

  return (
    <>
      <div>
        <ul className="deviceCard">
          {devices?.map((device) => (
            <DeviceListItem key={device.id} device={device} />
          ))}
        </ul>
      </div>
    </>
  );
};
