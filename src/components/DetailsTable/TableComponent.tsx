import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TablePagination, Typography } from '@mui/material';
import { formatDate } from 'utils/date.utils';
import LoadingSpinner from 'components/LoadingSpinner';
import { DetailsModal } from 'components/DetailsModal/DetailsModal';
import { LaunchStatusChip } from 'components/LaunchStatusChip';
import { Box } from '@mui/system';

interface IHeadingProps {
  heading: string;
}

const HeadingCell = ({ heading }: IHeadingProps) => {
  return (
    <TableCell>
      <Typography variant="caption" fontWeight="600">
        {heading}
      </Typography>
    </TableCell>
  );
};
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

export default function TableComponent(props: any) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [flightNumber, setFlightNumber] = React.useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState<string>('');
  const { launchData, isLoading } = props;
  const getSearchParam = (key: string) => {
    const params = searchParams.get(key);
    if (params !== null && params !== '') {
      return params;
    }
    return '';
  };

  useEffect(() => {
    if (searchParams.has('status')) {
      setFilter(getSearchParam('status'));
    } else {
      setFilter('all');
    }
  }, [searchParams]);

  return (
    <>
      <Box sx={{ width: 'auto', px: '2', mx: '10%' }}>
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: '10px',
            border: '1px solid grey 0.5'
          }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#EEEEEE' }}>
                <HeadingCell heading="No." />
                <HeadingCell heading="Launched (UTC)" />
                <HeadingCell heading="Location" />
                <HeadingCell heading="Mission" />
                <HeadingCell heading="Orbit" />
                <HeadingCell heading="Launch Status" />
                <HeadingCell heading="Rocket" />
              </TableRow>
            </TableHead>
            <TableBody>
              {isLoading && (
                <TableRow>
                  <LoadingSpinner />
                </TableRow>
              )}
              {launchData.length == 0 && !isLoading && (
                <Typography
                  style={{ marginBottom: '50px', display: 'block' }}
                  align="center"
                  variant="subtitle1">
                  No result found for the specified filter
                </Typography>
              )}
              {launchData.length > 0 &&
                launchData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((flightDetail: any, index: any) => (
                    <TableRow
                      onClick={(event) => {
                        setFlightNumber(flightDetail.flight_number);
                        handleOpen();
                      }}
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <DataCell data={flightDetail.flight_number} />
                      <DataCell data={formatDate('dd MMMM yyyy HH:mm', flightDetail.launch_date)} />
                      <DataCell data={flightDetail.launch_site_name} />
                      <DataCell data={flightDetail.mission_name} />
                      <DataCell data={flightDetail.mission_orbit} />
                      <TableCell>
                        <LaunchStatusChip
                          upcoming={flightDetail.upcoming_status}
                          status={flightDetail.launch_success}
                        />
                      </TableCell>

                      <DataCell data={flightDetail.rocket_name} />
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={launchData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <DetailsModal flightNumber={flightNumber} open={open} setOpen={setOpen} />
    </>
  );
}
