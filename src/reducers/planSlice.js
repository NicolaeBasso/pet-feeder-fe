import { createSlice } from '@reduxjs/toolkit';
import { UUIDGeneratorBrowser } from '../utils';
import { SCHEDULE_TIME, DEFAULT_MENU, DEFAULT_PLANS } from '../constants';

const initialState = {
  plans: DEFAULT_PLANS
};

export const planSlice = createSlice({
  name: 'plan',
  initialState: { ...initialState },
  reducers: {
    addPlan: (state, action) => {
      const {
        name,
        scheduleTime = SCHEDULE_TIME,
        amount = 1,
        menu = DEFAULT_MENU
      } = action.payload;

      state.plans = [
        ...state.plans,
        { id: UUIDGeneratorBrowser(), name, scheduleTime, amount, menu }
      ];
    },

    updatePlan: (state, action) => {
      const {
        id,
        name = state.name,
        scheduleTime = state.scheduleTime,
        device = state.device,
        amount = state.amount
      } = action.payload;

      state.plans.forEach((plan) => {
        if (plan.id === id) {
          plan.name = name;
          plan.scheduleTime = scheduleTime;
          plan.amount = amount;
          plan.device = device;
        }
      });
    },

    removePlan: (state, action) => {
      const { id } = action.payload;

      state.plans = [...state.plans.filter((plan) => plan.id !== id)];
    }
  }
});

export const { addPlan, removePlan, updatePlan } = planSlice.actions;

export default planSlice.reducer;
