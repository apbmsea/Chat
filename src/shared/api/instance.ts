import axios from 'axios';
import IUser from '../../app/types/IUser.ts';

export let BASE_URL = 'http://localhost:3000';
const path = '/api/chat';

const $api = axios.create({
	baseURL: BASE_URL + path
});

export const setBaseUrl = (url: string) => {
	BASE_URL = url;
};

const api = {
	getUsersList: async () => {
		const response = await $api.get('/getAll');
		return response.data;
	},
	getMessagesList: async () => {
		const response = await $api.get('/messages');
		return response.data;
	},
	register: async (state: IUser) => {
		const response = await $api.post('/register', state);
		return response.data;
	},
	logout: async (username: string) => {
		await $api.post('/logout', username);
	},
	sendMessage: async (username: string, message: string) => {
		await $api.post('/send', username, message);
	}
};

export default api;