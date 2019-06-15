import { setCommuters, setIsFetchingCommuter } from './commuter.action';
import RequestService from '../../services/request.service';
import { responseToJson } from '../../utils/parsing.helpers';
export default class Service {
    static fetchCommuters = (username, password) => async dispatch => {
        dispatch(setIsFetchingCommuter(true));
        const results = await RequestService.get('users/commuters');
        const json = await responseToJson(results);
        dispatch(setCommuters(json));
        dispatch(setIsFetchingCommuter(false));
    }
    static addBalance = (userId, points) => async dispatch => {
        const results = await RequestService.post('wallets', {
            UserId: userId,
            Amount: points,
        });
        const json = await responseToJson(results);
        console.log('zzzz',json);
    }
};