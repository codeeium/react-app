import { configureStore } from '@reduxjs/toolkit';
import reducer from './Reducer.jsx';

const store = configureStore({
    reducer: reducer,
});

export default store;
