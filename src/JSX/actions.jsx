// actions.js

export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchDataStart = () => ({
    type: FETCH_DATA_START,
});

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
});

// Async action creator using Redux Thunk
export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataStart());

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((data) => dispatch(fetchDataSuccess(data)))
            .catch((error) => dispatch(fetchDataFailure(error)));
    };
};
