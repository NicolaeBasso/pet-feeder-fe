import React from 'react';
import { Box, Button, Container, Grid, Pagination, Card, Typography } from '@mui/material';
import PetsListItem from './PetsListItem';
import deviceImg from '../icons/device.png';
import { useSelector, useDispatch } from 'react-redux';

export const Pets = () => {
  const pets = useSelector((state) => state.pet.pets);

  console.log(pets);

  return (
    <>
      <div>
        <Typography>Your pets</Typography>
        <ul className="devicesList">
          <Card variant="outlined">
            {pets?.map((pet) => (
              <PetsListItem key={pet.id} pet={pet} />
            ))}
          </Card>
        </ul>
      </div>
    </>
  );
};
