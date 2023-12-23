import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./types";
import { getData } from "app/api";

const initialState: IInitialState = {
 data: [],
 loadingAllCoins: false,
};

export const getAllCoins = createAsyncThunk("coins/getAllCoins", async () => {
 const res = await getData();
 return res.data.data.coins;
});

const coinsSlice = createSlice({
 name: "coins",
 initialState: initialState,
 reducers: {
  reset: () => initialState,
 },
 extraReducers: (builder) => {
  builder.addCase(getAllCoins.pending, (state) => {
   state.loadingAllCoins = true;
  });
  builder.addCase(getAllCoins.fulfilled, (state, action) => {
   state.data = action.payload;
   state.loadingAllCoins = false;
  });
 },
});

export default coinsSlice.reducer;
export const { reset } = coinsSlice.actions;
