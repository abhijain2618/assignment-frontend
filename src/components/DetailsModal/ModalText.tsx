import { Typography } from '@mui/material';
import React from 'react';

const ModalText = (props: any) => {
  return (
    <Typography variant="caption">
      {props.flightDetail.details}
      {props.flightDetail?.links?.wikipedia && (
        <a href={props.flightDetail.links.wikipedia}>Wikipedia</a>
      )}
    </Typography>
  );
};

export default ModalText;
