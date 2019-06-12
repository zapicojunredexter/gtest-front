
export const SET_COMMUTERS = 'SET_COMMUTERS';

export const SET_IS_FETCHING_COMMUTERS = 'SET_IS_FETCHING_COMMUTERS';

export const setIsFetchingCommuter = isFetching => dispatch =>    
    dispatch({
        type: SET_IS_FETCHING_COMMUTERS,
        payload: {
            isFetching
        }
    });


export const setCommuters = (commuters) => dispatch =>
    dispatch({
        type: SET_COMMUTERS,
        payload: {
            commuters
        }
    });
