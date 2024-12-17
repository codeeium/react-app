import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers';

// Create the Redux store using configureStore
const store = configureStore({
    reducer: dataReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
