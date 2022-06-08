import { Link } from 'react-router-dom';
import { Bell } from '../icons/bell';
import { Search } from '../icons/search';
import { Box, Button, Container, Grid, Pagination, Typography } from '@mui/material';
import deviceLogo from '../icons/logo1.png';

export const Navigation = (props) => {
  return (
    <div className="App inline-block">
      {/* <p className="text-red-800">Logged (localStorage) = {localStorage.getItem('logged')}</p>
      <p className="text-red-800">App navigration:</p> */}
      <Container>
        <Box className="logo" ml={3} sx={{ pt: 0 }}>
          <img src={deviceLogo} />
        </Box>
        <ul className="nav">
          <li>
            <Box ml={2} fullWidth width="100%">
              <Link to="/pets">
                <Button className="menu_button" fullWidth variant="contained" type="submit">
                  Pets
                </Button>
              </Link>
            </Box>
          </li>
          <li>
            <Box ml={2} width="100%">
              <Link to="/devices">
                <Button className="menu_button" fullWidth variant="contained" type="submit">
                  Devices
                </Button>
              </Link>
            </Box>
          </li>
          <li>
            <Box ml={2} width="100%">
              <Link to="/plans">
                <Button className="menu_button" fullWidth variant="contained" type="submit">
                  Feeding plan
                </Button>
              </Link>
            </Box>
          </li>
          <li>
            <Box ml={2} width="100%">
              <Link to="/login">
                <Button className="menu_button" fullWidth variant="contained" type="submit">
                  Login
                </Button>
              </Link>
            </Box>
          </li>
          <li>
            <Box ml={2} width="100%">
              <Link to="/logout">
                <Button className="menu_button" fullWidth variant="contained" type="submit">
                  Logout
                </Button>
              </Link>
            </Box>
          </li>
          <li>
            <Bell />
          </li>
          <li>
            <Search />
          </li>
        </ul>
      </Container>
    </div>
  );
};
