const initialState =
    {
    name: '',
    email: '',
};

const reducer =
    (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FORM_DATA':
            return { ...state,
                [action.payload.name]: action.payload.value };
        default:
            return state;
    }
};

export default reducer;
