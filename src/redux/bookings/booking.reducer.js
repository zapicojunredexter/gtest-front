import { SET_BOOKINGS } from './booking.action';

const initialState = {
    bookings: [],
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKINGS:
            return {
                ...state,
                bookings: action.payload.bookings,
            }
        default:
            return state;
    }
}