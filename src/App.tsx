import React, { Suspense } from 'react';
import './App.css';
import { BrowserRouter, Routes, Outlet } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/system';
import Header from 'components/Header/Header';
import LoadingSpinner from 'components/LoadingSpinner';
import AppRoutes from 'routes/AppRoutes';
import theme from 'styles/styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
          }}>
          <Header />
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>{AppRoutes}</Routes>
          </Suspense>
          <Outlet />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
