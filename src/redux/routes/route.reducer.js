import { SET_ROUTES, SET_IS_FETCHING_ROUTES } from './route.action';

const initialState = {
    routes: [],
    isFetching: false,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ROUTES:
            return {
                ...state,
                routes: action.payload.routes,
            }
        case SET_IS_FETCHING_ROUTES:
            return {
                ...state,
                isFetching: action.payload.isFetching,
            }
        default:
            return state;
    }
}