// import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { PetListItem } from './PetListItem';

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
