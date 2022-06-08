// @ts-nocheck
import { Box } from '@mui/material';
import { useDebugValue, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, useNavigate } from 'react-router-dom';
import { Routes } from '../node_modules/react-router-dom/index';
import './App.css';
import { Devices } from './components/Devices';
import { Login } from './components/Login';
import { Logout } from './components/Logout';
import { Navigation } from './components/Navigation';
import { Pets } from './components/Pets';
import { Plans } from './components/Plans';

function App(props) {
  const state = useSelector((state) => state);
  const [logged, setLogged] = useState(state.user.logged);

  useEffect(() => {}, [state]);

  useEffect(() => {
    setLogged(state.user.logged);
  }, [state.user.logged]);

  setInterval(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, 1000);

  if (!logged && window.location.pathname === '/logout') window.location.pathname = '/';

  if (!logged) return <Login />;

  return (
    <div className="App">
      <Box>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Devices />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/pets" element={<Pets />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="*" element={<Devices />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </div>
  );
}

export default App;
