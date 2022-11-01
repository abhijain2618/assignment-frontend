import { Stack } from '@mui/system';
import DetailsTable from 'components/DetailsTable/DetailsTable';
import FilterByStatus from 'components/Filters/FilterByStatus';
import FlightProvider from 'providers/FlightProvider';
import React from 'react';

const Landing = () => {
  return (
    <>
      <FlightProvider>
        <Stack
          sx={{ width: 'auto', px: '2', mx: '10%' }}
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}>
          <FilterByStatus />
        </Stack>
        <DetailsTable />
      </FlightProvider>
    </>
  );
};

export default Landing;
