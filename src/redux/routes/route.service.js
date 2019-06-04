import { setRoutes } from './route.action';
export default class Service {
    static fetchRoutes = (username, password) => dispatch => {
        const testRoutes = [{qwe:true},{qwe:true}];
        dispatch(setRoutes(testRoutes));
    }

    static addRoute = params => dispatch => {
        alert(JSON.stringify(params));
    }
};