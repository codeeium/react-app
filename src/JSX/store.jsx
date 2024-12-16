// store.ts
import { createStore } from 'redux';
import itemsReducer from './reducers';

const store = createStore(itemsReducer);

export default store;
