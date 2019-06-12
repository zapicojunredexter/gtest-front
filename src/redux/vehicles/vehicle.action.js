
export const SET_VEHICLES = 'SET_VEHICLES';

export const SET_IS_FETCHING_VEHICLES = 'SET_IS_FETCHING_VEHICLES';

export const setIsFetchingVehicle = (isFetching) => dispatch =>
    dispatch({
        type: SET_IS_FETCHING_VEHICLES,
        payload: {
            isFetching
        }
    });

export const setVehicles = (vehicles) => dispatch =>
    dispatch({
        type: SET_VEHICLES,
        payload: {
            vehicles
        }
    });
