import EditIcon from '@mui/icons-material/Edit';
import { Box, Typography } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DEFAULT_DEVICES } from '../constants';
import { updatePet } from '../reducers/petSlice';
import { PetIcon } from '../icons/petIcon';

export const PetListItem = ({ pet }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(pet.name);
  const [isNameFocused, setIsNamedFocused] = useState(false);

  const devices = useSelector((state) => state.device.devices);
  const petDevice = devices.find((el) => el.id === pet.deviceId);
  const petDeviceName = petDevice?.name;

  return (
    <>
      <div className="shadow-lg p-4 flex md:flex-row flex-col">
        <div className="flex-1">
          <li className="inline-block capitalize text-xl font-bold m-1 px-3 ">
            {!isNameFocused ? (
              <Box
                sx={{
                  horizontalAlign: 'middle',
                  verticalAlign: 'middle',
                  display: 'flex-block',
                  width: '20%'
                }}>
                <PetIcon width={'40%'} sx={{ marginTop: '10px', marginLeft: '3px' }} />
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
                {/* <EditIcon sx={{ marginTop: '10px', marginLeft: '3px' }} /> */}
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
          <li className="capitalize text-xl font-bold m-2 px-3 pt-3">
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
                return <TextField {...params} label="Device" />;
              }}
            />
          </li>
        </div>
      </div>
    </>
  );
};
