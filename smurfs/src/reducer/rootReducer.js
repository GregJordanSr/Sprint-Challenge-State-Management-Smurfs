// Declared initialState and set up the rootReducers with the switch statements to declare the proper actions inside the store.

const initialState = {
    smurfs: [],
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        default:
            return state;
    }
}

export default rootReducer;