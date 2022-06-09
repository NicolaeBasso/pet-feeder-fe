import { Button, Box, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TextField from '@mui/material/TextField';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DEFAULT_LOCATIONS, DEFAULT_PLANS } from '../constants';
import { updateDevice } from '../reducers/deviceSlice';

export const DeviceListItem = ({ device }) => {
  const dispatch = useDispatch();
  const plans = useSelector((state) => state.plan.plans);

  return (
    <>
      <div className="shadow-lg p-4 inline-block md:flex-row flex-col">
        <div className="flex-1">
          <li
            className=" capitalize text-xl font-bold m-2 px-3 pt-3"
            onChange={() => dispatch(updateDevice({ ...device, power: !device.power }))}>
            <FormControlLabel
              sx={{
                display: 'block'
              }}
              control={<Switch checked={device.power} name="loading" color="primary" />}
              label="Power"
            />
          </li>
          <li className="capitalize text-xl font-bold m-2 px-3 pt-3">
            <Autocomplete
              value={device.location}
              disablePortal
              id="combo-box-demo"
              options={DEFAULT_LOCATIONS}
              onChange={(e) => {
                dispatch(updateDevice({ ...device, location: e.target.textContent }));
              }}
              sx={{ width: 300 }}
              renderInput={(params) => {
                return <TextField {...params} label="Location" />;
              }}
            />
          </li>
          <li className=" capitalize text-xl font-bold m-2 px-3 pt-3 ">
            <Autocomplete
              value={device.plan?.name}
              disablePortal
              id="combo-box-demo"
              options={DEFAULT_PLANS.map((plan) => plan.name)}
              onChange={(e) => {
                const selected = plans.filter((el) => {
                  return el.name === e.target.outerText;
                });

                dispatch(updateDevice({ ...device, plan: plans.length ? selected[0] : null }));
              }}
              sx={{ width: 300 }}
              renderInput={(params) => {
                return <TextField {...params} label="Plan" />;
              }}
            />
          </li>
        </div>
        <div className="md:px-2 mt-3 md:mt-0">
          <Link
            className="inline-block  mx-5 mb-4 px-2 py-2 rounded-md"
            to={`/plans/${device.id}/`}>
            <Button fullWidth variant="contained" type="submit">
              See plan
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
