
export const SET_DRIVERS = 'SET_DRIVERS';

export const SET_IS_FETCHING_DRIVERS = 'SET_IS_FETCHING_DRIVERS';

export const setIsFetchingDrivers = isFetching => dispatch =>
    dispatch({
        type: SET_IS_FETCHING_DRIVERS,
        payload: {
            isFetching
        }
    });

export const setDrivers = (drivers) => dispatch =>
    dispatch({
        type: SET_DRIVERS,
        payload: {
            drivers
        }
    });
