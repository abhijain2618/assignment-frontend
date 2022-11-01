import { Chip } from '@mui/material';

export const LaunchStatusChip = ({ status, upcoming }: { status: boolean; upcoming: boolean }) => {
  const getStatusChipColor = () => {
    if (upcoming) {
      return 'yellow';
    } else if (upcoming === false) {
      if (status) {
        return '#27C454';
      } else {
        return '#FF4242';
      }
    }
  };

  const getStatusLabel = () => {
    if (upcoming) {
      return 'Upcoming';
    } else if (upcoming === false) {
      if (status) {
        return 'Success';
      } else {
        return 'Failed';
      }
    }
  };
  return (
    <Chip
      size="small"
      label={getStatusLabel()}
      sx={{
        textColor: 'white',
        fontWeight: '500',
        fontSize: '10px',
        backgroundColor: getStatusChipColor()
      }}
    />
  );
};
