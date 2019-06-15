import { setTrips, setIsFetchingTrips } from './trip.action';
import RequestService from '../../services/request.service';
import { responseToJson } from '../../utils/parsing.helpers';
import { async } from 'q';
export default class Service {
    static fetchTrips = (username, password) => async dispatch => {
        dispatch(setIsFetchingTrips(true));
        const results = await RequestService.get('trips');
        const json = await responseToJson(results);
        dispatch(setTrips(json));
        dispatch(setIsFetchingTrips(false));
    }

    static cancelTrip = tripId => async dispatch => {
        const result = await RequestService.put(`trips/cancel/${tripId}`);
        await responseToJson(result);
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

    static updateTripDriver = (tripId,driver) => async dispatch => {
        const payload = {
            Driver: {
                Id: driver.Id,
                LastName: driver.LastName,
                FirstName: driver.FirstName,
                BirthDate: driver.BirthDate,
                Gender: driver.Gender,
                ContactNumber: driver.ContactNumber
            }
        }
        const result = await RequestService.put(`trips/${tripId}`,payload);
        await responseToJson(result);
    }
};
