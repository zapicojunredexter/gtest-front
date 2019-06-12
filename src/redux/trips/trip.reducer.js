import { SET_TRIPS, SET_IS_FETCHING_TRIPS } from './trip.action';

const initialState = {
    trips: [],
    isFetching: false,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TRIPS:
            return {
                ...state,
                trips: action.payload.trips,
            }
        case SET_IS_FETCHING_TRIPS:
            return {
                ...state,
                isFetching: action.payload.isFetching,
            }
        default:
            return state;
    }
}