import { Link } from 'react-router-dom';
import { Bell } from '../icons/bell';
import { Search } from '../icons/search';
import { Box, Button, Container, Grid, Pagination, Typography } from '@mui/material';
const deviceLogo = require('../icons/logo1.png');

export const Navigation = (props) => {
  return (
    <div className="App inline-block">
      <p className="text-red-800">Logged (localStorage) = {localStorage.getItem('logged')}</p>
      <p className="text-red-800">App navigration:</p>
      <Box className="logo" ml={3} sx={{ pt: 0 }}>
        <img src={deviceLogo} />
      </Box>
      <ul className="nav">
        <li>
          <Box ml={2} fullWidth width="100%">
            <Button
              className="menu_button"
              href="/pets"
              fullWidth
              variant="contained"
              type="submit">
              Pets
            </Button>
          </Box>
        </li>
        <li>
          <Box ml={2} width="100%">
            <Button
              className="menu_button"
              href="/devices"
              fullWidth
              variant="contained"
              type="submit">
              Devices
            </Button>
          </Box>
        </li>
        <li>
          <Box ml={2} width="100%">
            <Button
              className="menu_button"
              href="/plans"
              fullWidth
              variant="contained"
              type="submit">
              Login
            </Button>
          </Box>
        </li>
        <li>
          <Box ml={2} width="100%">
            <Button
              className="menu_button"
              href="/login"
              fullWidth
              variant="contained"
              type="submit">
              Logout
            </Button>
          </Box>
        </li>
        <li>
          <Box ml={2} width="100%">
            <Button
              className="menu_button"
              href="/logout"
              fullWidth
              variant="contained"
              type="submit">
              Pets
            </Button>
          </Box>
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
