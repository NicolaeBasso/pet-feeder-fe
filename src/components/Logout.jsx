import { useDispatch } from 'react-redux';
import { logout } from '../reducers/userSlice';
import { useEffect } from 'react';

export const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, []);

  return null;
};
