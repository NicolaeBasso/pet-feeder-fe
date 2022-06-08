import React from 'react';
import deviceImg from '../icons/device.png';
import { Box, Button, Container, Grid, Pagination, Typography } from '@mui/material';
import { useState } from 'react';
import { DEFAULT_DEVICES, DEFAULT_PETS } from '../constants';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { updatePet } from '../reducers/petSlice';

export const PetListItem = ({ pet }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(pet.name);
  const [isNameFocused, setIsNamedFocused] = useState(false);

  const devices = useSelector((state) => state.device.devices);
  const petDevice = devices.find((el) => el.id === pet.deviceId);
  const petDeviceName = petDevice?.name;

  return (
    <>
      <div className="bg-green-200 max-w-xl w-full rounded-lg shadow-lg p-4 flex md:flex-row flex-col">
        <div className="flex-1">
          <li className="text-purple-600 capitalize text-xl font-bold m-2 px-3 pt-3">
            {!isNameFocused ? (
              <Box sx={{ display: 'flex', verticalAlign: 'middle' }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  mb={3}
                  color="#0096c7"
                  onClick={() => {
                    setIsNamedFocused(true);
                  }}>
                  {pet.name}
                </Typography>
                <EditIcon sx={{ marginTop: '10px', marginLeft: '3px' }} />
              </Box>
            ) : (
              <TextField
                autoFocus
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  dispatch(updatePet({ ...pet, name: e.target.value }));
                }}
                onBlur={(event) => setIsNamedFocused(false)}
              />
            )}
          </li>
          <li className="text-purple-600 capitalize text-xl font-bold m-2 px-3 pt-3">
            <Autocomplete
              value={petDeviceName}
              disablePortal
              id="combo-box-demo"
              options={DEFAULT_DEVICES.map((device) => device.name)}
              onChange={(e) => {
                const selected = devices.find((el) => {
                  return el.name === e.target.textContent;
                });

                dispatch(updatePet({ ...pet, deviceId: selected.id }));
              }}
              sx={{ width: 300 }}
              renderInput={(params) => {
                return <TextField {...params} label="Plan" />;
              }}
            />
          </li>
        </div>
      </div>
    </>
  );
};
