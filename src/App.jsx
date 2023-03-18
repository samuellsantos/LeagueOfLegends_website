import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SideNav } from './components/sidenavbar/SideNav';
import { Home } from './components/Home/Home';
import { Champions } from './components/Champions/Champions';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="champions/*" element={<Champions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
