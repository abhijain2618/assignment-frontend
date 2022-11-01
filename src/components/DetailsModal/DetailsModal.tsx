import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFlightsContext } from 'providers/context';
import FlightTableComponent from './FlightTableComponent';
import ModalHeader from './ModalHeader';
import ModalText from './ModalText';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 2,
  p: 4,
  overflowY: 'scroll',
  maxHeight: '90%'
};

export const DetailsModal = ({
  flightNumber,
  open,
  setOpen
}: {
  flightNumber: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const handleClose = () => setOpen(false);
  const { getFlightById } = useFlightsContext();
  const [flightDetail, setFlightDetail] = React.useState();

  const fetchFlight = React.useCallback(async () => {
    if (getFlightById) {
      try {
        const flightData = await getFlightById(flightNumber);
        setFlightDetail(flightData);
      } catch (error) {
        console.error('unable to fetch flight');
      }
    }
  }, [getFlightById, flightNumber]);

  React.useEffect(() => {
    fetchFlight();
  }, [fetchFlight, flightNumber]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <ModalHeader flightDetail={flightDetail} handleClose={handleClose} />
        <ModalText flightDetail={flightDetail} />
        <FlightTableComponent flightDetail={flightDetail} />
      </Box>
    </Modal>
  );
};
