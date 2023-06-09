import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const filterSlice = createSlice({
    name: "filter",
    initialState: initialState.filter,
    reducers: {
        changeFilter(state, action) {
            state = action.payload;
        },
    },
})

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;