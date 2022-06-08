import { createSlice } from '@reduxjs/toolkit';
import { UUIDGeneratorBrowser } from '../utils';
import { DEFAULT_PETS } from '../constants';

const initialState = {
  pets: DEFAULT_PETS
};

export const petSlice = createSlice({
  name: 'pet',
  initialState: { ...initialState },
  reducers: {
    addPet: (state, action) => {
      const { name = DEFAULT_PETS } = action.payload;

      state.pets = [...state.pets, { id: UUIDGeneratorBrowser(), name }];
    },

    updatePet: (state, action) => {
      const { id, name = state.name, deviceId = state.deviceId } = action.payload;

      state.pets.forEach((pet) => {
        if (pet.id === id) {
          pet.name = name;
          pet.deviceId = deviceId;
        }
      });
    },

    removePet: (state, action) => {
      const { id } = action.payload;

      state.pets = [...state.pets.filter((pet) => pet.id !== id)];
    }
  }
});

export const { addPet, removePet, updatePet } = petSlice.actions;

export default petSlice.reducer;
