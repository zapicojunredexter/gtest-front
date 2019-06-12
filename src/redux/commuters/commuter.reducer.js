import { SET_COMMUTERS } from './commuter.action';

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
        default:
            return state;
    }
}