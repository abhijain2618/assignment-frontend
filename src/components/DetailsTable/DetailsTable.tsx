import { useFlightsContext } from 'providers/context';
import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getFlightStatusByDate } from 'utils/date.utils';
import TableComponent from './TableComponent';

const DetailsTable = () => {
  const { fetchFlights, flights } = useFlightsContext();
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const [filterCategory, setFilterCategory] = useState<string | null>();
  const [filterDate, setFilterDate] = useState<string | null>();
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
    if (searchParams.has('date')) {
      setFilterDate(getSearchParam('date'));
    }
  }, [searchParams]);

  useEffect(() => {
    fetchFlightsList();
  }, [fetchFlightsList]);

  useEffect(() => {
    const firstFilter = flights.filter((flight) => {
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
    });
    const secondFilter = firstFilter.filter((flight) => {
      if (filterDate === 'all') {
        return true;
      }
      const dateState = getFlightStatusByDate(new Date(flight.launch_date));
      if (dateState === 'pastsix' && filterDate === 'pastsix') {
        return true;
      }
      if (dateState === 'upcomingsix' && filterDate === 'upcomingsix') {
        return true;
      }
    });
    setFilteredFlights(secondFilter);
  }, [filterCategory, flights, filterDate]);
  return <>{<TableComponent launchData={filteredFlights} isLoading={isLoading} />}</>;
};

export default DetailsTable;
