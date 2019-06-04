import { SET_VEHICLES } from './vehicle.action';

const initialState = {
    vehicles: [],
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_VEHICLES:
            return {
                ...state,
                vehicles: action.payload.vehicles,
            }
        default:
            return state;
    }
}