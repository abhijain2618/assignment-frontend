import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { formatDate } from 'utils/date.utils';

interface IDataCellProps {
  data: string;
}
const DataCell = ({ data }: IDataCellProps) => {
  return (
    <TableCell>
      <Typography variant="caption" fontWeight="600">
        {data}
      </Typography>
    </TableCell>
  );
};

export default function FlightTableComponent(props: any) {
  const { flightDetail } = props;
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          width: '100%',
          mx: 'auto'
        }}>
        <Table aria-label="flight table">
          <TableBody>
            <TableRow>
              <DataCell data={'Flight Number'} />
              <DataCell data={flightDetail?.flight_number} />
            </TableRow>
            <TableRow>
              <DataCell data={'Mission Name'} />
              <DataCell data={flightDetail?.mission_name} />
            </TableRow>
            <TableRow>
              <DataCell data={'Rocket Type'} />
              <DataCell data={flightDetail?.rocket?.rocket_type} />
            </TableRow>
            <TableRow>
              <DataCell data={'Rocket Name'} />
              <DataCell data={flightDetail?.rocket?.rocket_name} />
            </TableRow>
            <TableRow>
              <DataCell data={'Manufacturer'} />
              <DataCell data={flightDetail?.rocket?.second_stage?.payloads[0]?.manufacturer} />
            </TableRow>
            <TableRow>
              <DataCell data={'Nationality'} />
              <DataCell data={flightDetail?.rocket?.second_stage?.payloads[0]?.nationality} />
            </TableRow>
            <TableRow>
              <DataCell data={'Launch Date'} />
              <DataCell data={formatDate('dd MMMM yyyy HH:mm', flightDetail?.launch_date_utc)} />
            </TableRow>
            <TableRow>
              <DataCell data={'Payload Type'} />
              <DataCell data={flightDetail?.rocket?.second_stage?.payloads[0]?.payload_type} />
            </TableRow>
            <TableRow>
              <DataCell data={'Orbit'} />
              <DataCell data={flightDetail?.rocket?.second_stage?.payloads[0]?.orbit} />
            </TableRow>
            <TableRow>
              <DataCell data={'Launch Site'} />
              <DataCell data={flightDetail?.launch_site?.site_name} />
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
