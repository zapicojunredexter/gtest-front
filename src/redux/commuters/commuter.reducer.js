import { SET_COMMUTERS, SET_IS_FETCHING_COMMUTERS } from './commuter.action';

const initialState = {
    commuters: [],
    isFetching: true,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMUTERS:
            return {
                ...state,
                commuters: action.payload.commuters,
            }
        case SET_IS_FETCHING_COMMUTERS:
            return {
                ...state,
                isFetching: action.payload.isFetching,
            }
        default:
            return state;
    }
}