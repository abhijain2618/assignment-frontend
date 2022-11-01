import { useFlightsContext } from 'providers/context';
import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TableComponent from './TableComponent';

const DetailsTable = () => {
  const { fetchFlights, flights } = useFlightsContext();
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const [filterCategory, setFilterCategory] = useState<string | null>();
  const [filteredFlights, setFilteredFlights] = useState<Array<any>>([]);

  const fetchFlightsList = useCallback(async () => {
    if (fetchFlights)
      try {
        setIsLoading(true);
        await fetchFlights();
        setIsLoading(false);
      } catch (error) {
        console.error('Unale to fetch flights', error);
      }
  }, [fetchFlights]);

  const getSearchParam = (key: string) => {
    const params = searchParams.get(key);
    if (params !== null && params !== '') {
      return params;
    }
    return null;
  };

  useEffect(() => {
    if (searchParams.has('status')) {
      setFilterCategory(getSearchParam('status'));
    }
  }, [searchParams]);

  useEffect(() => {
    fetchFlightsList();
  }, [fetchFlightsList]);

  useEffect(() => {
    setFilteredFlights(
      flights.filter((flight) => {
        const upcoming = flight.upcoming_status;
        const status = flight.launch_success;
        if (filterCategory === 'all') {
          return true;
        }
        if (filterCategory === 'upcoming' && upcoming) {
          return true;
        }

        if (filterCategory === 'sucessful' && status) {
          return true;
        }
        if (filterCategory === 'failed' && status === false) {
          return true;
        }
      })
    );
  }, [filterCategory, flights]);
  return <>{<TableComponent launchData={filteredFlights} isLoading={isLoading} />}</>;
};

export default DetailsTable;
