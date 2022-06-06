import './App.css';
import { Navigation } from './components/Navigation';
import { useEffect, useState } from 'react';
import { Pets } from './components/Pets';
import { Devices } from './components/Devices';
import { Plans } from './components/Plans';
import { useSelector, useDispatch } from 'react-redux';
import { NavBar } from './components/NavBar';
import { Box } from '@mui/system';

function App(props) {
  const state = useSelector((state) => state);

  useEffect(() => {
    console.log('state in App = ', state);
  }, [state]);

  return <div className="App"></div>;
}

export default App;
