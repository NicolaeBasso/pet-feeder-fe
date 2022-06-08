// import { Box } from '@mui/system';
import React from 'react';
import { Box, Button, Container, Grid, Pagination, Card, Typography } from '@mui/material';
import { PlanListItem } from './PlanListItem';
import { useSelector, useDispatch } from 'react-redux';

export const Plans = () => {
  const plans = useSelector((state) => state.plan.plans);

  return (
    <>
      <div>
        <Typography>Your plans</Typography>
        <ul className="planCard">
          {plans?.map((plan) => (
            <PlanListItem key={plan.id} plan={plan} />
          ))}
        </ul>
      </div>
    </>
  );
};
