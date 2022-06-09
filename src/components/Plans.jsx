// import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { PlanListItem } from './PlanListItem';
import { Box } from '@mui/material';

export const Plans = () => {
  const plans = useSelector((state) => state.plan.plans);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography>Your plans</Typography>
        <ul className="planCard">
          {plans?.map((plan) => (
            <PlanListItem key={plan.id} plan={plan} />
          ))}
        </ul>
      </Box>
    </>
  );
};
