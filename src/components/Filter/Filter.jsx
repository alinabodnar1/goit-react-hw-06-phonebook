import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import TextField from '@mui/material/TextField';
import { changeFilter }  from 'redux/filterSlice';
// import PropTypes from 'prop-types';

export default function Filter() {
  const dispatch = useDispatch();
  const textFilter = useSelector(state => state.filter);

  // Генератор екшену
  // const changeFilter = textFilter => {
  //   return {
  //     type: "filter/changeFilter",
  //     payload: textFilter,
  //   }
  // }

  function handleFilterChange(evt) {
    console.log("evt.target.value:", evt.target.value);
    dispatch(changeFilter(evt.target.value));
  } 

  return (
      <TextField
        id="standard-basic"
        label="Filter"
        variant="standard"
        value={textFilter}
        onChange={handleFilterChange}
      />
  );
}
// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
// }