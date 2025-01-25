import axios from 'axios';
import IUser from '../../app/types/IUser.ts';

export let BASE_URL = 'http://10.4.3.155:3000/api/chat';


const $api = axios.create({
	baseURL: BASE_URL
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
		await $api.delete(`/logout/${username}`, username);
	},
	sendMessage: async (username: string, message: string) => {
		await $api.post('/send', { username, message });
	}
};

export default api;