import { createSlice } from '@reduxjs/toolkit';
import { UUIDGeneratorBrowser } from '../utils';

const initialState = {
  pets: []
};

export const petSlice = createSlice({
  name: 'pet',
  initialState: { ...initialState },
  reducers: {
    addPet: (state, action) => {
      const { name } = action.payload;

      state.pets = [...state.pets, { id: UUIDGeneratorBrowser(), name }];
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

      state.pets = [...state.pets.filter((pet) => pet.id !== id)];
    }
  }
});

export const { addPet, removePet, updatePet } = petSlice.actions;

export default petSlice.reducer;
