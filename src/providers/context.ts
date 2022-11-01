// libs
import { createContext, useContext } from 'react';
import { Flight } from './types';

interface FlightsContext {
  getFlightById?: (id: string) => Promise<any>;
  flights: Array<Flight>;
  fetchFlights?: () => Promise<void>;
}

const initialValue: FlightsContext = {
  flights: []
};

const flightsContext = createContext(initialValue);

export const useFlightsContext = () => useContext(flightsContext);

export default flightsContext;
