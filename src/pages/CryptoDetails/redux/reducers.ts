import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./types";
import { getCoin } from "app/api";

const initialState: IInitialState = {
 data: { name: "", description: "", websiteUrl: "", symbol: "" },
 loadingCoin: false,
};

export const getData = createAsyncThunk(
 "coin/getCoin",
 async (coinId: string) => {
  const res = await getCoin(coinId);
  return res.data.data.coin;
 }
);

const coinSlice = createSlice({
 name: "coin",
 initialState: initialState,
 reducers: {
  reset: () => initialState,
 },
 extraReducers: (builder) => {
  builder.addCase(getData.pending, (state) => {
   state.loadingCoin = true;
  });
  builder.addCase(getData.fulfilled, (state, action) => {
   state.data = action.payload;
   state.loadingCoin = false;
  });
  builder.addCase(getData.rejected, (state) => {
   state.loadingCoin = false;
  });
 },
});

export default coinSlice.reducer;
export const { reset } = coinSlice.actions;
