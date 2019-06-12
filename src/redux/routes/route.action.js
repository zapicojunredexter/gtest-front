
export const SET_ROUTES = 'SET_ROUTES';

export const SET_IS_FETCHING_ROUTES = 'SET_IS_FETCHING_ROUTES';

export const setIsFetchingRoutes = isFetching => dispatch =>
    dispatch({
        type: SET_IS_FETCHING_ROUTES,
        payload: {
            isFetching
        }
    })

export const setRoutes = (routes) => dispatch =>
    dispatch({
        type: SET_ROUTES,
        payload: {
            routes
        }
    });
