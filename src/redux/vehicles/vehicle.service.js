import { setVehicles } from './vehicle.action';
import RequestService from '../../services/request.service';
import { responseToJson } from '../../utils/parsing.helpers';
export default class Service {
    static fetchVehicles = (username, password) => async dispatch => {
        const results = await RequestService.get('vehicles');
        const json = await responseToJson(results);
        dispatch(setVehicles(json));
    }

    static addVehicle = params => async dispatch => {
        console.log(params);
        const payload = {
            PlateNumber: params.plateNumber,
            Seats: params.seats
        };
        const response = await RequestService.post('vehicles',payload);
        await responseToJson(response);
    }
};