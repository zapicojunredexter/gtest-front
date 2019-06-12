import { SET_BOOKINGS, SET_IS_FETCHING_BOOKINGS } from './booking.action';

const initialState = {
    bookings: [],
    isFetching: false,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKINGS:
            return {
                ...state,
                bookings: action.payload.bookings,
            }
        case SET_IS_FETCHING_BOOKINGS:
            return {
                ...state,
                isFetching: action.payload.isFetching
            };
        default:
            return state;
    }
}