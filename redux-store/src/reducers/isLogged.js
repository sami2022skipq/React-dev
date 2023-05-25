
const isLoggedReducer = (state = ({}), action) => {
    switch (action.type) {
        case "CHANGE":
            return !state
        case "LOGIN":
            return state = action.payload
        case "LOGOUT":
            return state =({})
        default:
            return state
    }

}
export default isLoggedReducer