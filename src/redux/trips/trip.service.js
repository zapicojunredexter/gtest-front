import { setTrips } from './trip.action';
import RequestService from '../../services/request.service';
export default class Service {
    static fetchTrips = (username, password) => dispatch => {
        const test = [{qwe:true},{qwe:true}];
        dispatch(setTrips(test));
    }

    static addTrip = params => dispatch => {
        alert(JSON.stringify(params));
    }
};