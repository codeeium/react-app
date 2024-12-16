import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './reducers';

const store = configureStore({
    reducer: itemsReducer,
});

export default store;
