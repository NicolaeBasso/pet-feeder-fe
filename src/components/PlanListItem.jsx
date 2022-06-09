import { Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DEFAULT_PLANS, DEFAULT_SCHEDULES } from '../constants';
import { updatePlan } from '../reducers/planSlice';

export const PlanListItem = ({ plan }) => {
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.plan.plans);

  return (
    <>
      <div className="max-width: 0rem shadow-lg p-4 inline-block md:flex-row flex-col">
        <div className="flex-1">
          <li className=" m-2 px-3 pt-3">
            <Typography variant="h4" fontWeight="bold" mb={3} color="#4d89e9">
              {plan.name}
            </Typography>
          </li>
          <li className="capitalize text-xl font-bold m-2 px-3 pt-3">
            <Autocomplete
              value={plan.scheduleTime}
              disablePortal
              id="combo-box-demo"
              options={DEFAULT_SCHEDULES}
              onChange={(e) => {
                dispatch(updatePlan({ ...plan, scheduleTime: e.target.textContent }));
              }}
              sx={{ width: 300 }}
              renderInput={(params) => {
                return <TextField {...params} label="Food Supply Frequency" />;
              }}
            />
          </li>
          <li className=" capitalize text-xl font-bold m-2 px-3 pt-3 ">
            <Autocomplete
              value={plan?.amount}
              disablePortal
              id="combo-box-demo"
              options={DEFAULT_PLANS.map((plan) => plan.amount.toString())}
              onChange={(e) => {
                const selected = plans.find((el) => {
                  return el.amount === e.target.outerText;
                });

                dispatch(updatePlan({ ...plan, amount: e.target.outerText }));
              }}
              sx={{ width: 300 }}
              renderInput={(params) => {
                return <TextField {...params} label="Times" />;
              }}
            />
          </li>
        </div>
      </div>
    </>
  );
};
