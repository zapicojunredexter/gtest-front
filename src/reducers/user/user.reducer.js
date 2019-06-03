/*
 src/reducers/simpleReducer.js
*/
export default (state = {
    user: 'johnny'
}, action) => {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            return {
                result: action.payload
            }
        default:
            return state
    }
}