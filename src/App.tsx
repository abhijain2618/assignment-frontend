import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Outlet } from 'react-router-dom';
import { Box } from '@mui/system';
import Header from 'components/Header';
import Footer from 'components/Footer';
import LoadingSpinner from 'components/LoadingSpinner';
import AppRoutes from 'routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>{AppRoutes}</Routes>
        </Suspense>
        <Outlet />
        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
