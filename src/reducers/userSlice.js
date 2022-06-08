import { createSlice } from '@reduxjs/toolkit';
import { UUIDGeneratorBrowser } from '../utils';

// const initialState = {
//   id: null,
//   email: null,
//   logged: localStorage.getItem('logged') == '1' ? true : false
// };

const initialState = {
  ...JSON.parse(localStorage.getItem('state')).user
};

export const userSlice = createSlice({
  name: 'user',
  initialState: { ...initialState },
  reducers: {
    login: (state, action) => {
      console.log('login state = ', state);

      const { email = '' } = { ...action.payload };

      state.id = UUIDGeneratorBrowser();
      state.email = email;
      state.logged = true;
      localStorage.setItem('logged', '1');
    },

    logout: (state) => {
      console.log('logout state = ', state);
      console.log(JSON.parse(localStorage.getItem('state')).user);

      // this didn't work at all for some reason
      // state = { ...initialState };

      state.logged = false;
      state.email = null;
      state.id = null;

      console.log(state);
      localStorage.setItem('logged', '0');
    }
  }
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
