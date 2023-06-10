import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import TextField from '@mui/material/TextField';
import { changeFilter }  from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();
  const textFilter = useSelector(state => state.filter);

  function handleFilterChange(textFilter) {
    // dispatch(changeFilter(evt.target.value));
     dispatch(changeFilter(textFilter));
  } 

  return (
      <TextField
        id="standard-basic"
        label="Filter"
        variant="standard"
        onChange={handleFilterChange}
      />
  );
}
