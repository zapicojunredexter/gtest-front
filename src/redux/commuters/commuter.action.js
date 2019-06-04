
export const SET_COMMUTERS = 'SET_COMMUTERS';

export const setCommuters = (commuters) => dispatch =>
    dispatch({
        type: SET_COMMUTERS,
        payload: {
            commuters
        }
    });
