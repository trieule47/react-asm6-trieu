import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    cooktails: [],
    count: 0,
    loading: 0,
    detail: {},
    carts: [],
};

const GlobalSlice = createSlice({
    name: 'globalSlice',
    initialState: initialState,
    reducers: {
        increaseCounter(state, action) {
            state.count = state.count + action.payload
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        fetchData(state, action) {
            state.cooktails = action.payload;
        },
        fetchDetailData(state, action) {
            state.detail = action.payload;
        },
        addToCart(state, action) {
            state.carts = [...state.carts, action.payload];
        },
        deleteFromCart(state, action) {
            state.carts = state.carts.filter((e) => e.idDrink != action.payload.idDrink)
        }
    }
});

const { actions, reducer } = GlobalSlice;
export { actions as GlobalActions, reducer as GlobalReducer };