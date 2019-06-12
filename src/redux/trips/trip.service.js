import { setTrips, setIsFetchingTrips } from './trip.action';
import RequestService from '../../services/request.service';
import { responseToJson } from '../../utils/parsing.helpers';
export default class Service {
    static fetchTrips = (username, password) => async dispatch => {
        dispatch(setIsFetchingTrips(true));
        const results = await RequestService.get('trips');
        const json = await responseToJson(results);
        dispatch(setTrips(json));
        dispatch(setIsFetchingTrips(false));
    }

    static addTrip = params => async dispatch => {
        const payload = {
            DriverId: params.driver,
            RouteId: params.route,
            DepartTime: params.tripTime,
            DepartDate: params.tripDate,
            VehicleId: params.vehicle,
            Price: params.price
        };
        const result = await RequestService.post('trips',payload);
        await responseToJson(result);
    }
};
