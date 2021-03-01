import api from '../../../services/api';
import { signin } from '../../ducks/account';
import {toastr} from 'react-redux-toastr'
import {token} from '../../../utils/constants'
import Cookies from 'js-cookie'

export const AccountSignIn = (user) => {

    return (dispatch) => {
        return api
            .post('/account/signin', user)
            .then((res) => {
                Cookies.set(token, res.data.token, { expires: 7 });
               
                dispatch(signin());

                window.location.pathname = '/dashboard';
            })
            .catch((error) => {
                toastr.error('Conta', error.response.data.message)
            });
    };
};