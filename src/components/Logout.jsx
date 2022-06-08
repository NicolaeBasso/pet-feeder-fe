import { useDispatch } from 'react-redux';
import { logout } from '../reducers/userSlice';
import { useEffect } from 'react';

export const Logout = () => {
  console.log('In logout!');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, []);

  return null;
};
