import { setBookings, setIsFetchingBooking } from './booking.action';
import RequestService from '../../services/request.service';
import { responseToJson } from '../../utils/parsing.helpers';
export default class Service {
    static fetchBookings = () => async dispatch => {
        dispatch(setIsFetchingBooking(true));
        const results = await RequestService.get('bookings');
        const json = await responseToJson(results);
        dispatch(setBookings(json));
        dispatch(setIsFetchingBooking(false));
    }
};