const initialState = {
    movies: null
}

export const reducer = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case 'API_REQUEST':
            return { ...state, movies: action.payload}
        default:
            return state;
    }
};