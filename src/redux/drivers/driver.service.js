import { setDrivers } from './driver.action';
export default class Service {
    static addDriver = (params) => dispatch => {
        alert(JSON.stringify(params));
    }
    static fetchDrivers = () => async dispatch => {
        const testDriver = [{test: true},{test: false}];
        dispatch(setDrivers(testDriver));
    }
};