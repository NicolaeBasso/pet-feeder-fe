import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { users } from '../constants';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [logged, setLogged] = useState(localStorage.getItem('logged') === 'true');

  const onChange = (e) => {
    if (e.target.name === 'email') setEmail(e.target.value);
    else setPassword(e.target.value);
  };

  const onLogin = () => {
    users.find((user) => {
      if (user.email === email && user.password === password) {
        localStorage.setItem('logged', 'true');
        setLogged(true);
      } else {
        localStorage.setItem('logged', 'false');
        setLogged(false);
      }
    });
  };

  useEffect(() => {
    if (logged) navigate('/');
  }, [logged]);

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          flexDirection: 'column'
        }}
        noValidate
        autoComplete="off">
        <h1 className="text-center text-2xl" style={{ width: 'auto' }}>
          Login
        </h1>
        <TextField
          id="login-email"
          name="email"
          label="Email"
          variant="filled"
          value={email}
          onChange={onChange}
        />
        <TextField
          id="login-password"
          name="password"
          label="Password"
          variant="filled"
          value={password}
          onChange={onChange}
        />
        <Grid container justify="center" sx={{ justifyContent: 'center' }}>
          <Button variant="contained" onClick={onLogin}>
            Login
          </Button>
        </Grid>
      </Box>
    </Grid>
  );
};
