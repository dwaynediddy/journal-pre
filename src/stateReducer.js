// (currentState, action) --> newState

// Reducer function
export default function (state, action) {
    switch (action.type) {
        case "setCategories": {
            return {
                ...state,
                categories: action.data
            }
        }
        case "setEntries": {
            return {
                ...state,
                entries: action.data
            }
        }
        default:
            return state
    }
}
