import { setRoutes } from './route.action';
import RequestService from '../../services/request.service';
import { responseToJson } from '../../utils/parsing.helpers';
export default class Service {
    static fetchRoutes = () => async dispatch => {
        const results = await RequestService.get('routes');
        const json = await responseToJson(results);
        dispatch(setRoutes(json));
    }

    static addRoute = params => async dispatch => {
        const payload = {
            FromLocation: [
                params.fromLat,
                params.fromLng
            ],
            ToLocation: [
                params.toLat,
                params.toLng,
            ],
            Route: params.routeName,
        };
        await RequestService.post('routes',payload);
    }
};