
export const SET_BOOKINGS = 'SET_BOOKINGS';

export const SET_IS_FETCHING_BOOKINGS = 'SET_IS_FETCHING_BOOKINGS';


export const setIsFetchingBooking = (isFetching) => dispatch =>
    dispatch({
        type: SET_IS_FETCHING_BOOKINGS,
        payload: {
            isFetching
        }
    });


export const setBookings = (bookings) => dispatch =>
    dispatch({
        type: SET_BOOKINGS,
        payload: {
            bookings
        }
    });
