import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';  // Named import for thunk
import dataReducer from './reducers';  // Adjust the path as needed

const store = configureStore({
    reducer: dataReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunk),  // Using thunk here
});

export default store;
