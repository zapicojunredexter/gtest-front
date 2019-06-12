import { setVehicles, setIsFetchingVehicle } from './vehicle.action';
import RequestService from '../../services/request.service';
import { responseToJson } from '../../utils/parsing.helpers';
export default class Service {
    static fetchVehicles = (username, password) => async dispatch => {
        try {
            dispatch(setIsFetchingVehicle(true));
            const results = await RequestService.get('vehicles');
            const json = await responseToJson(results);
            dispatch(setVehicles(json));
            dispatch(setIsFetchingVehicle(false));
        } catch (error) {
            dispatch(setIsFetchingVehicle(false));
            throw error;
        }
    }

    static disableVehicle = vehicleId => async dispatch => {
        const payload = {
            deleted: true,
        };
        const response = await RequestService.patch(`vehicles/${vehicleId}`,payload);
        await responseToJson(response);
    }

    static enableVehicle = vehicleId => async dispatch => {
        const payload = {
            deleted: false,
        };
        const response = await RequestService.patch(`vehicles/${vehicleId}`,payload);
        await responseToJson(response);
    }

    static addVehicle = params => async dispatch => {
        const payload = {
            PlateNumber: params.plateNumber,
            Seats: params.seats
        };
        const response = await RequestService.post('vehicles',payload);
        await responseToJson(response);
    }
};