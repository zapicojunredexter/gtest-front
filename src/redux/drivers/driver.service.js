import { setDrivers, setIsFetchingDrivers } from './driver.action';
import RequestService from '../../services/request.service';
import { responseToJson } from '../../utils/parsing.helpers';
export default class Service {
    static addDriver = (params) => async dispatch => {
        if(params.password !== params.password2){
            throw new Error('Confirm passwor does not match password');
        }
        const payload = {
            email: params.email,
            password: params.password,
            // BirthDate: new Date(params.birthDate),
            BirthDate: params.birthDate,
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
        dispatch(setIsFetchingDrivers(true));
        const results = await RequestService.get('users/drivers');
        const json = await responseToJson(results);
        dispatch(setDrivers(json));
        dispatch(setIsFetchingDrivers(false));
    }
};