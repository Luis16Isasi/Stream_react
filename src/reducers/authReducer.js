const INITIAL_STATE = {
    isSignedIn: null,
    userid: null,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return { ...state, isSignedIn: true, userid: action.payload };
        case 'SIGN_OUT':
            return { ...state, isSignedIn: false, userid: null };
        default:
            return state;
    }
};
