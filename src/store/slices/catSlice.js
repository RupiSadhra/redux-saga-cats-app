import { createSlice } from "@reduxjs/toolkit";

const catSlice = createSlice({
    name: 'cat',
    initialState: {
        cats: [],
        isLoading: false
    },
    reducers: {
        getCatsFetch(state, action) {
            state.isLoading = true;
        },
        getCatsSuccess(state, action) {
            state.isLoading = false;
            state.cats = action.payload;
        },
        getCatsFailure(state, action) {
            state.isLoading = false;
        }
    }
});

export const { getCatsFailure, getCatsSuccess, getCatsFetch } = catSlice.actions;
export const  catReducer = catSlice.reducer;