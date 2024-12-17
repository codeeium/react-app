import {
    FETCH_DATA_START,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE,
    FetchActions,
} from "./actions";

// Define the shape of the state
interface DataState {
    loading: boolean;
    data: any | null; // Replace `any` with a specific type if known
    error: Error | null;
}

// Initial state with proper types
const initialState: DataState = {
    loading: false,
    data: null,
    error: null,
};

// Reducer function with type annotations
const dataReducer = (
    state: DataState = initialState,
    action: FetchActions
): DataState => {
    switch (action.type) {
        case FETCH_DATA_START:
            return { ...state, loading: true, error: null };

        case FETCH_DATA_SUCCESS:
            return { ...state, loading: false, data: action.payload };

        case FETCH_DATA_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
};

export default dataReducer;
