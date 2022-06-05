import React from 'react';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation"
import { Pets } from "./components/Pets";
import { Devices } from "./components/Devices";
import { Plans } from "./components/Plans";
import { Login } from "./components/Login";

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/pets" element={<Pets />} />
      <Route path="/devices" element={<Devices />} />
      <Route path="/plans" element={<Plans />} />
    </Routes>
  </BrowserRouter>
);  