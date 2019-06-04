import { setVehicles } from './vehicle.action';
export default class Service {
    static fetchVehicles = (username, password) => dispatch => {
        const test = [{qwe:true},{qwe:true}];
        dispatch(setVehicles(test));
    }

    static addVehicle = params => dispatch => {
        alert(JSON.stringify(params));
    }
};