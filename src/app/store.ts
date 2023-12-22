import { configureStore } from "@reduxjs/toolkit";
// reducers
import coinsReducer from "pages/Home/redux/reducers"
// application state itnterfaces


const store = configureStore({
  reducer: {
    coins: coinsReducer
  }
});
export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {product: ProductState}
export type AppDispatch = typeof store.dispatch;