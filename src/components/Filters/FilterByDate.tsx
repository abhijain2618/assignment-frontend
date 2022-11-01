import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { filterDate } from 'constants/Filter';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const FilterByDate = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [checked, setChecked] = useState<string>('');

  const addSearchParam = (key: string, status: string) => {
    if (status !== '') {
      if (searchParams.has(key)) {
        searchParams.set(key, status);
      } else {
        searchParams.append(key, status);
      }
    } else searchParams.delete(key);
    setSearchParams(searchParams);
  };

  const getSearchParam = (key: string) => {
    const params = searchParams.get(key);
    if (params !== null && params !== '') {
      return params;
    }
    return '';
  };

  useEffect(() => {
    if (checked !== '') {
      addSearchParam('date', checked);
    }
  }, [checked]);

  useEffect(() => {
    if (searchParams.has('date')) {
      setChecked(getSearchParam('date'));
    } else {
      setChecked('all');
    }
  }, [searchParams]);

  const handleChange = (e: SelectChangeEvent<string>) => {
    return setChecked(e.target.value);
  };

  return (
    <>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={checked}
        onChange={handleChange}
        size="small">
        {filterDate.map((status) => (
          <MenuItem key={status.value} value={status.value}>
            {status.text}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default FilterByDate;
