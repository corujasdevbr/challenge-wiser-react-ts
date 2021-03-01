import axios from 'axios';
import { urlApi } from '../utils/constants';

export default axios.create({
	baseURL: urlApi
});