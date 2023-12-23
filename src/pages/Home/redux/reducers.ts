import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./types";
import { getData } from "app/api";

const initialState: IInitialState = {
 data: {
  total: 0,
  total24hVolume: "",
  totalCoins: 0,
  totalExchanges: 0,
  totalMarketCap: "",
  totalMarkets: 0,
 },
 loadingStats: false,
};

export const getStats = createAsyncThunk("coins/getStats", async () => {
 const res = await getData();
 return res.data.data.stats;
});

const statSlice = createSlice({
 name: "stats",
 initialState: initialState,
 reducers: {
  reset: () => initialState,
 },
 extraReducers: (builder) => {
  builder.addCase(getStats.pending, (state) => {
   state.loadingStats = true;
  });
  builder.addCase(getStats.fulfilled, (state, action) => {
   state.data = action.payload;
   state.loadingStats = false;
  });
 },
});

export default statSlice.reducer;
export const { reset } = statSlice.actions;
