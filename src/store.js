import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userSlice';
import petReducer from './reducers/petSlice';
import deviceReducer from './reducers/deviceSlice';
import planReducer from './reducers/planSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    pet: petReducer,
    device: deviceReducer,
    plan: planReducer
  }
});
