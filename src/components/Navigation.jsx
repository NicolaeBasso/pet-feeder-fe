import { Box, Button, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Bell } from '../icons/bell';
import deviceLogo from '../icons/logo1.png';
import { Search } from '../icons/search';

export const Navigation = (props) => {
  const logged = useSelector((state) => state.user.logged);

  return (
    <div className="App inline-block">
      <Container>
        <Box className="logo">
          <img src={deviceLogo} />
        </Box>
        <ul className="nav">
          <li>
            <Box ml={1} width="100%">
              <Link to="/pets" style={{ textDecoration: 'none' }}>
                <Button
                  style={{
                    borderRadius: 35,
                    backgroundImage: 'linear-gradient(#427ef5, #42bcf5)',
                    padding: '18px 36px',
                    fontSize: '18px'
                  }}
                  className="menu_button"
                  fullWidth
                  variant="contained"
                  type="submit">
                  Pets
                </Button>
              </Link>
            </Box>
          </li>
          <li>
            <Box ml={2} width="100%">
              <Link to="/devices" style={{ textDecoration: 'none' }}>
                <Button
                  style={{
                    borderRadius: 35,
                    backgroundImage: 'linear-gradient(#427ef5, #42bcf5)',
                    padding: '18px 36px',
                    fontSize: '18px'
                  }}
                  className="menu_button"
                  fullWidth
                  variant="contained"
                  type="submit">
                  Devices
                </Button>
              </Link>
            </Box>
          </li>
          <li>
            <Box ml={2} width="100%">
              <Link to="/plans" style={{ textDecoration: 'none' }}>
                <Button
                  style={{
                    borderRadius: 35,
                    backgroundImage: 'linear-gradient(#427ef5, #42bcf5)',
                    padding: '18px 36px',
                    fontSize: '18px'
                  }}
                  className="menu_button"
                  fullWidth
                  variant="contained"
                  type="submit">
                  Feeding plan
                </Button>
              </Link>
            </Box>
          </li>
          {!logged && (
            <li>
              <Box ml={2} width="100%">
                <Link to="/login" style={{ textDecoration: 'none' }}>
                  <Button
                    style={{
                      borderRadius: 35,
                      backgroundImage: 'linear-gradient(#427ef5, #42bcf5)',
                      // backgroundColor: '#21b6ae',
                      padding: '18px 36px',
                      fontSize: '18px'
                    }}
                    className="menu_button"
                    fullWidth
                    variant="contained"
                    type="submit">
                    Login
                  </Button>
                </Link>
              </Box>
            </li>
          )}
          {logged && (
            <li>
              <Box ml={2} width="100%">
                <Link to="/logout" style={{ textDecoration: 'none' }}>
                  <Button
                    style={{
                      borderRadius: 35,
                      backgroundImage: 'linear-gradient(#427ef5, #42bcf5)',
                      padding: '18px 36px',
                      fontSize: '18px'
                    }}
                    className="menu_button"
                    fullWidth
                    variant="contained"
                    type="submit">
                    Logout
                  </Button>
                </Link>
              </Box>
            </li>
          )}
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
