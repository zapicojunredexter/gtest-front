
export const SET_ROUTES = 'SET_ROUTES';

export const setRoutes = (routes) => dispatch =>
    dispatch({
        type: SET_ROUTES,
        payload: {
            routes
        }
    });
