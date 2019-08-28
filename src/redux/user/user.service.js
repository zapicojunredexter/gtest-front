import { setIsLoggedIn, setIsLoggedOut } from './user.action';
export default class Service {
    static login = (username, password) => async  dispatch => {
        if(username === 'admin' && password === 'admin') {
            dispatch(setIsLoggedIn());
        }else {
            // throw new Error('Invalid credentials');
            return Promise.reject(new Error('Invalid login credentials'));
        }
    }

    static logout = () => dispatch => {
        dispatch(setIsLoggedOut());
    }
};