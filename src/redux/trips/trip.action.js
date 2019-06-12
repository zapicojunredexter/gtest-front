
export const SET_TRIPS = 'SET_TRIPS';

export const SET_IS_FETCHING_TRIPS = 'SET_IS_FETCHING_TRIPS';

export const setIsFetchingTrips = isFetching => dispatch =>
    dispatch({
        type: SET_IS_FETCHING_TRIPS,
        payload: {
            isFetching
        }
    });


export const setTrips = (trips) => dispatch =>
    dispatch({
        type: SET_TRIPS,
        payload: {
            trips
        }
    });
