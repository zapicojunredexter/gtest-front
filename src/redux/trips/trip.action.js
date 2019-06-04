
export const SET_TRIPS = 'SET_TRIPS';

export const setTrips = (trips) => dispatch =>
    dispatch({
        type: SET_TRIPS,
        payload: {
            trips
        }
    });
