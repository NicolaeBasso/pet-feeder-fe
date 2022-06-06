import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { Box } from '@mui/material';
import { Bell } from '../icons/bell';
import { Search } from '../icons/search';
const deviceLogo = require('../icons/logo1.png');

export const Navigation = (props) => {
  return (
    <div className="App inline-block">
      <p className="text-red-800">Logged (localStorage) = {localStorage.getItem('logged')}</p>
      <p className="text-red-800">App navigration:</p>
      <Box className="logo" sx={{ pt: 0 }}>
        <img src={deviceLogo} />
      </Box>
      <ul className="nav">
        <li>
          <Link to="/pets">Pets</Link>
        </li>
        <li>
          <Link to="/devices">Devices</Link>
        </li>
        <li>
          <Link to="/plans">Food plans</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Bell />
        </li>
        <li>
          <Search />
        </li>
      </ul>
    </div>
  );
};
