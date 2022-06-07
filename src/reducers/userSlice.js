import { createSlice } from '@reduxjs/toolkit';
import { UUIDGeneratorBrowser } from '../utils';

const initialState = {
  email: '',
  logged: localStorage.getItem('logged' === 'true') ? true : false
};

export const userSlice = createSlice({
  name: 'user',
  initialState: { ...initialState },
  reducers: {
    login: (state, action) => {
      const { email } = { ...action.payload, id: UUIDGeneratorBrowser() };

      state.email = email;
      state.logged = true;
    },

    logout: (state) => {
      state = { ...initialState };
      state.logged = false;
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
