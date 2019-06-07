import { setDrivers } from './driver.action';
import RequestService from '../../services/request.service';
import { responseToJson } from '../../utils/parsing.helpers';
export default class Service {
    static addDriver = (params) => async dispatch => {
        console.log(params);
        const payload = {
            email: params.email,
            password: params.password,
            BirthDate: new Date(params.birthDate),
            ContactNumber: params.contactNumber,
            FirstName: params.firstName,
            Gender: params.gender,
            LastName: params.lastName,
            AccountType: 'Driver'
        }
        const result = await RequestService.post('users/drivers',payload);
        await responseToJson(result);
    }
    static fetchDrivers = () => async dispatch => {
        const results = await RequestService.get('users/drivers');
        const json = await responseToJson(results);
        dispatch(setDrivers(json));
    }
};