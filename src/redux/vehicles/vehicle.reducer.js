import { SET_VEHICLES, SET_IS_FETCHING_VEHICLES } from './vehicle.action';

const initialState = {
    vehicles: [],
    isFetching: false,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_VEHICLES:
            return {
                ...state,
                vehicles: action.payload.vehicles,
            }
        case SET_IS_FETCHING_VEHICLES:
                return {
                    ...state,
                    isFetching: action.payload.isFetching,
                }
        default:
            return state;
    }
}