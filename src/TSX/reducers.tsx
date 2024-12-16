// Define the type for the item in the list
interface Item {
    id: number;
    name: string;
}

// Define the shape of the state
interface State {
    items: Item[];
}

// Define the type for the action
interface Action {
    type: string;
    payload: Item;
}

// Initial state
const initialState: State = {
    items: [],
};

// Reducer function
const itemsReducer = (state = initialState, action: Action): State => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload],
            };
        default:
            return state;
    }
};

export default itemsReducer;
