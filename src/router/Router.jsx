import React from 'react';
import { Routes, Route } from 'react-router';
import MainLayout from '../layouts/MainLayout';  
import NFTsPage from '../pages/NFTsPage';       
import App from '../App';                       
import CreatorsPage from '../pages/CreatorsPage'; 
import HomePage from '../pages/HomePage';

function Router() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<App />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/nfts" element={<NFTsPage />} /> 
        <Route path="/creators" element={<CreatorsPage />} /> 
      </Route>
    </Routes>
  );
}

export default Router;
