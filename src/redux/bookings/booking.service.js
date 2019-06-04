import { setBookings } from './booking.action';
export default class Service {
    static fetchBookings = (username, password) => dispatch => {
        const test = [{qwe:true},{qwe:true}];
        dispatch(setBookings(test));
    }
};