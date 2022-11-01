import { CircularProgress, Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

export default function LoadingSpinner() {
  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 8
        }}>
        <CircularProgress color="primary" size={54} />
      </Box>
    </Container>
  );
}
