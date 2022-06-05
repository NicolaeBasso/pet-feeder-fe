import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  logged: localStorage.getItem('logged' === 'true'),
  pets: [],
  devices: []
};

export const userSlice = createSlice({
  name: 'user',
  initialState: { ...initialState },
  reducers: {
    login: (state, action) => {
      const { email } = { ...action.payload };

      console.log(action);

      console.log(email);

      state.email = email;
    },
    logout: (state) => {
      state = { ...initialState };
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
