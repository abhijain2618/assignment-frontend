// libs
import React, { memo, useCallback, useMemo, useState } from 'react';
import axios from '../api/Instance';

// context
import AuthContext from './context';
import { Flight } from './types';

interface FlightsProviderProps {
  children: React.ReactNode;
}

function FlightsProvider({ children }: FlightsProviderProps) {
  const [flights, setFlights] = useState<Array<Flight>>([]);

  const fetchFlights = useCallback(async () => {
    const endpoint = '/launches';
    try {
      const response = await axios.get(endpoint);
      if (!response.data) throw response.data;
      const flightsList = response.data?.map((flight: any) => ({
        flight_number: flight.flight_number,

        launch_date: flight.launch_date_utc,
        mission_name: flight.mission_name,
        mission_orbit: flight.rocket.second_stage.payloads[0].orbit,
        launch_success: flight.launch_success,
        launch_site_name: flight.launch_site.site_name,
        rocket_name: flight.rocket.rocket_name,
        upcoming_status: flight.upcoming
      }));
      setFlights(flightsList);
    } catch (error) {
      console.error('unable to load flights', error);
    }
  }, []);

  const getFlightById = useCallback(async (id: string) => {
    try {
      const response = await axios.get(`/launches/${id}`);
      if (!response?.data) throw response.data;
      return response.data;
    } catch (error) {
      console.error(error, 'Error getting flight');
    }
  }, []);

  const values = useMemo(
    () => ({
      flights,
      getFlightById,
      fetchFlights
    }),
    [flights, getFlightById, fetchFlights]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export default memo(FlightsProvider);
