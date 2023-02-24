const INITIAL_STATE = {
    todos : []
};
export const TodoReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos : [...state.todos,action.payload]
            };
        case "COMPLETED_TODO":
            return {
                ...state,
                
            };

        case "REMOVE_TODO":
            return {
                ...state,
                
            };
        default:
            return state;
    }
};