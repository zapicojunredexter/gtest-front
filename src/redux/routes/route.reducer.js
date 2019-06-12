import { SET_ROUTES } from './route.action';

const initialState = {
    routes: [],
    isFetching: true,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ROUTES:
            return {
                ...state,
                routes: action.payload.routes,
            }
        default:
            return state;
    }
}