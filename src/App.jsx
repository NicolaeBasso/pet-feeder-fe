import './App.css';
import { Navigation } from './components/Navigation';
import { useState } from 'react';
import { Pets } from './components/Pets';
import { Devices } from './components/Devices';
import { Plans } from './components/Plans';

function App(props) {
  return (
    <div className="App">
      <Pets />
      <Devices />
      <Plans />
    </div>
  );
}

export default App;
