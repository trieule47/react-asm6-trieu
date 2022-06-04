import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cooktails: [],
    count: 0,
};

const GlobalSlice = createSlice({
    name: 'globalSlice',
    initialState: initialState,
    reducers: {
        increaseCounter(state, action) {
            state.count = state.count + action.payload
        },
        fetchData() {

        }
    }
});

const { actions, reducer } = GlobalSlice;
export { actions as GlobalActions, reducer as GlobalReducer };