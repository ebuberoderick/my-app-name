const INITIAL_STATE = {
    UserData : [],
    isLoggedIn : false
};

export const UserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case action.type:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};