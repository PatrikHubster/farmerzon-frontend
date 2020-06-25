import Router from 'next/router';
import axios from 'axios';
import { AUTHENTICATE, DEAUTHENTICATE } from '../types';
import { config } from '../../config';
import { setCookie, removeCookie } from '../../cookie';

// gets token from the api and stores it in the redux store and in cookie
const authenticate = ({ email, password, userName }, type) => {
    if (type !== 'login-username' && type !== 'login-email' && type !== 'register') {
        throw new Error('Wrong API call!');
    }
    return (dispatch) => {
        axios.post(`${config.AUTH_SERVER}/authentication/${type}`, { email, password, userName })
            .then((response) => {
                setCookie('token', response.data.token);
                localStorage.setItem('token', response.data.token)
                Router.push('/');
                dispatch({ type: AUTHENTICATE, payload: response.data.token });
            })
            .catch((err) => {
                console.log('Dispatch:' + `${config.AUTH_SERVER}/authentication/${type}`)
                throw new Error(err);
            });
    };
};

// gets the token from the cookie and saves it in the store
const reauthenticate = (token) => {
    return (dispatch) => {
        dispatch({ type: AUTHENTICATE, payload: token });
    };
};

// removing the token
const deauthenticate = () => {
    return (dispatch) => {
        removeCookie('token');
        localStorage.clear();
        Router.push('/');
        dispatch({ type: DEAUTHENTICATE });
    };
};


export default {
    authenticate,
    reauthenticate,
    deauthenticate,
};
