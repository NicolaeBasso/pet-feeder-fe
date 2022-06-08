import React from 'react';
import deviceImg from '../icons/device.png';
import { Box, Button, Container, Grid, Pagination, Typography } from '@mui/material';
import { useState } from 'react';
import { DEFAULT_PETS } from '../constants';
import PetList from './DeviceList';

const PetsListItem = ({ pet }) => {
  return (
    <>
      <div className="bg-green-200 max-w-xl w-full rounded-lg shadow-lg p-4 flex md:flex-row flex-col">
        <div className="flex-1">
          <li className="text-purple-600 capitalize text-xl font-bold m-2 px-3 pt-3">
            <Typography variant="h4" fontWeight="bold" mb={3} color="#0096c7">
              {pet.name}
            </Typography>
          </li>
          <li className="text-purple-600 capitalize text-xl font-bold m-2 px-3 pt-3">
            <Typography variant="h4" fontWeight="bold" mb={3} color="#0096c7">
              {pet.device}
            </Typography>
          </li>
        </div>
      </div>
    </>
  );
};

export default PetsListItem;
