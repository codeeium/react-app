// store.js

import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers';

// Create the Redux store using configureStore
const store = configureStore({
    reducer: dataReducer,
});

export default store;
