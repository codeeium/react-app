import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterReducer';

const store = configureStore({
    reducer: counterReducer,
});

export default store;


/*
Action ->Counter
counterReducer -> store

 */