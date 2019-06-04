
export const SET_DRIVERS = 'SET_DRIVERS';

export const setDrivers = (drivers) => dispatch =>
    dispatch({
        type: SET_DRIVERS,
        payload: {
            drivers
        }
    });
