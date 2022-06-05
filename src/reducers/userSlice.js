import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  logged: localStorage.getItem('logged' === 'true') ? true : false,
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
