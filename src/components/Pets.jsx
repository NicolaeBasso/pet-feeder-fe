// import { Box } from '@mui/system';
import React from 'react';
import { Box, Button, Container, Grid, Pagination, Card, Typography } from '@mui/material';
import { PetListItem } from './PetListItem';
import { useSelector, useDispatch } from 'react-redux';

export const Pets = () => {
  const pets = useSelector((state) => state.pet.pets);

  return (
    <>
      <div>
        <Typography>Your pets</Typography>
        <ul className="petCard">
          {pets?.map((pet) => (
            <PetListItem key={pet.id} pet={pet} />
          ))}
        </ul>
      </div>
    </>
  );
};
