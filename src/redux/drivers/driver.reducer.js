import { SET_DRIVERS } from './driver.action';

const initialState = {
    drivers: [],
    isFetching: true,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DRIVERS:
            return {
                ...state,
                drivers: action.payload.drivers,
            }
        default:
            return state;
    }
}