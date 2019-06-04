import { setCommuters } from './commuter.action';
export default class Service {
    static fetchCommuters = (username, password) => dispatch => {
        const test = [{qwe:true},{qwe:true}];
        dispatch(setCommuters(test));
    }
};