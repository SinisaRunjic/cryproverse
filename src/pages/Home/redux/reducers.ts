import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IInitialState } from './types'
import { getData } from 'mockData'

const initialState: IInitialState = {
  data: {
    total: 0,
    total24hVolume: '',
    totalCoins: 0,
    totalExchanges: 0,
    totalMarketCap: '',
    totalMarkets: 0
  },
  loadingAllCoins: false
}

export const fetchAllCoins = createAsyncThunk("user/getUser", async () => {
  const res = await getData(`https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0`)
  const jsonData = await res.json()
  return (jsonData.data.stats)
})


const coinsSlice = createSlice({
  name: "stats",
  initialState: initialState,
  reducers: {
    reset: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCoins.pending, (state) => {
      state.loadingAllCoins = true
    })
    builder.addCase(fetchAllCoins.fulfilled, (state, action) => {
      state.data = action.payload
      state.loadingAllCoins = false
    })
  }
})

export default coinsSlice.reducer;
export const { reset } = coinsSlice.actions;