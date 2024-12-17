// reducers.js


/*
Action changes the state
Action - start, success, failure

Every action change the state
Action - Start, Success, Failure ( variable name summary )
State  - what action type ( variable detail )
 */

import { FETCH_DATA_START, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actions';

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_START:
            return {...state, loading: true};
        case FETCH_DATA_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case FETCH_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default dataReducer;
