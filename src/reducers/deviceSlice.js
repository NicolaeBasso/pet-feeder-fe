import { createSlice } from '@reduxjs/toolkit';
import { UUIDGeneratorBrowser } from '../utils';
import { DEFAULT_LOCATION, DEFAULT_DEVICES } from '../constants';

const initialState = {
  devices: DEFAULT_DEVICES
};

export const deviceSlice = createSlice({
  name: 'device',
  initialState: { ...initialState },
  reducers: {
    addDevice: (state, action) => {
      const { name, location = DEFAULT_LOCATION, plan, pet, power = false } = action.payload;

      state.devices = [
        ...state.devices,
        { id: UUIDGeneratorBrowser(), name, location, plan, pet, power }
      ];
    },

    updateDevice: (state, action) => {
      const {
        id,
        name = state.name,
        location = state.location,
        plan = state.plan,
        pet = state.pet,
        power = state.power
      } = action.payload;

      state.devices.forEach((device) => {
        if (device.id === id) {
          console.log('reducer plan = ', plan);

          device.name = name;
          device.location = location;
          device.plan = plan;
          device.pet = pet;
          device.power = power;
        }
      });
    },

    removeDevice: (state, action) => {
      const { id } = action.payload;

      state.devices = [...state.devices.filter((device) => device.id !== id)];
    }
  }
});

export const { addDevice, removeDevice, updateDevice } = deviceSlice.actions;

export default deviceSlice.reducer;
