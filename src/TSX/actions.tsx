// Define action types
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

// Define TypeScript interfaces for action types
interface FetchDataStartAction {
    type: typeof FETCH_DATA_START;
}

interface FetchDataSuccessAction {
    type: typeof FETCH_DATA_SUCCESS;
    payload: any; // Replace `any` with a specific type for fetched data if available
}

interface FetchDataFailureAction {
    type: typeof FETCH_DATA_FAILURE;
    payload: Error;
}

// Combine all action types into a union type
export type FetchActions =
    | FetchDataStartAction
    | FetchDataSuccessAction
    | FetchDataFailureAction;

// Action creators
export const fetchDataStart = (): FetchDataStartAction => ({
    type: FETCH_DATA_START,
});

export const fetchDataSuccess = (data: any): FetchDataSuccessAction => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

export const fetchDataFailure = (error: Error): FetchDataFailureAction => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
});

// Async action creator using Redux Thunk
import { Dispatch } from "redux";

export const fetchData =
    () => {
    return (dispatch: Dispatch<FetchActions>) => {
        dispatch(fetchDataStart());

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => dispatch(fetchDataSuccess(data)))
            .catch((error) => dispatch(fetchDataFailure(error)));
    };
};
/*
dispatch from redux is used
fetch data, if success, if fail what happen
 */