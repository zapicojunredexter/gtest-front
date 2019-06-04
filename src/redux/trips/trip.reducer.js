import { SET_TRIPS } from './trip.action';

const initialState = {
    trips: [],
};
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TRIPS:
            return {
                ...state,
                trips: action.payload.trips,
            }
        default:
            return state;
    }
}