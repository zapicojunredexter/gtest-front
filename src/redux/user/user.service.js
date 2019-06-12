import { setIsLoggedIn, setIsLoggedOut } from './user.action';
export default class Service {
    static login = (username, password) => dispatch => {
        if(username === 'admin' && password === 'admin') {
            dispatch(setIsLoggedIn());
        }
    }

    static logout = () => dispatch => {
        dispatch(setIsLoggedOut());
    }
};