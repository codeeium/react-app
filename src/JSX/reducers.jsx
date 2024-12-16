// reducer.js
const initialState
    = {
    items: []
};

const itemsReducer = (state = initialState, action) =>
{
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
