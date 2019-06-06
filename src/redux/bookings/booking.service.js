import { setBookings } from './booking.action';
import RequestService from '../../services/request.service';
export default class Service {
    static fetchBookings = () => async dispatch => {
        const results = await RequestService.get('bookings');
        console.log('AYAYA', results);
        const test = [{qwe:true},{qwe:true}];
        dispatch(setBookings(test));
    }
};