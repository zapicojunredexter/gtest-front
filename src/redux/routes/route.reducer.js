import { SET_ROUTES } from './route.action';

const initialState = {
    routes: [],
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