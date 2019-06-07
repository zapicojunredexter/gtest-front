import { setCommuters } from './commuter.action';
import RequestService from '../../services/request.service';
import { responseToJson } from '../../utils/parsing.helpers';
export default class Service {
    static fetchCommuters = (username, password) => async dispatch => {
        const results = await RequestService.get('users/commuters');
        const json = await responseToJson(results);
        dispatch(setCommuters(json));
    }
};