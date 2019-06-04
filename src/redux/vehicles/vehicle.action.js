
export const SET_VEHICLES = 'SET_VEHICLES';

export const setVehicles = (vehicles) => dispatch =>
    dispatch({
        type: SET_VEHICLES,
        payload: {
            vehicles
        }
    });
