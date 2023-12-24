import { configureStore } from "@reduxjs/toolkit";
// reducers
import statsReducer from "pages/Home/redux/reducers";
import coinsReducer from "pages/Cryptocurrencies/redux/reducers";
// application state itnterfaces

const store = configureStore({
 reducer: {
  stats: statsReducer,
  coins: coinsReducer,
 },
});
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {product: ProductState}
export type AppDispatch = typeof store.dispatch;
