import { SET_DRIVERS, SET_IS_FETCHING_DRIVERS } from './driver.action';

const initialState = {
    drivers: [],
    isFetching: false,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DRIVERS:
            return {
                ...state,
                drivers: action.payload.drivers,
            }
        case SET_IS_FETCHING_DRIVERS:
            return {
                ...state,
                isFetching: action.payload.isFetching,
            };
        default:
            return state;
    }
}