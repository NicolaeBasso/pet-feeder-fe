import { createSlice } from '@reduxjs/toolkit';
import { UUIDGeneratorBrowser } from '../utils';
import { DEFAULT_PETS } from '../constants';

const initialState = {
  devices: DEFAULT_PETS
};

export const deviceSlice = createSlice({
  name: 'pet',
  initialState: { ...initialState },
  reducers: {
    addDevice: (state, action) => {
      const { name = DEFAULT_PETS } = action.payload;

      state.devices = [...state.devices, { id: UUIDGeneratorBrowser(), name }];
    },

    updatePet: (state, action) => {
      const { id, name = state.name, device = state.device } = action.payload;

      state.pets.forEach((pet) => {
        if (pet.id === id) {
          pet.name = name;
          pet.device = device;
        }
      });
    },

    removePet: (state, action) => {
      const { id } = action.payload;

      state.pets = [...state.devices.filter((pet) => pet.id !== id)];
    }
  }
});

export const { addPet, removePet, updateDevice } = deviceSlice.actions;

export default deviceSlice.reducer;
