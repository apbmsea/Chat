import axios from 'axios';
import IUser from '../../app/types/IUser.ts';

export let BASE_URL = 'http://10.4.3.155:3000';

const $api = axios.create({
	baseURL: BASE_URL
});

export const setBaseUrl = (url: string) => {
	BASE_URL = url;
};

const api = {
	register: async (state: IUser) => {
	 await $api.post('api/chat/register', state);
	},
	logout: async (username: string) => {
		await $api.delete(`api/chat/logout/${username}`, username);
	},
	getUsersList: async () => {
		const response = await $api.get('api/chat/getAll');
		return response.data;
	},
	getMessagesList: async () => {
		const response = await $api.get('api/chat/messages');
		return response.data;
	},
	getPrivateMessagesList: async (sender: string, name: string) => {
		const response = await $api.get('api/ls/chat', { sender, name});
		return response.data;
	},
	sendMessage: async (username: string, message: string) => {
		await $api.post('api/chat/send', { username, message });
	},
	sendPrivateMessage: async (senderUsername: string, receiverUsername: string, message: string, ) => {
		await $api.post('api/ls/send/private', { senderUsername, receiverUsername, message });
	},
	sendGroupMessage: async (username: string, roomName: string, message: string, ) => {
		await $api.post('api/rooms/message', { username, roomName, message });
	},
	createRoom: async (name: string, lostMembers: string[]) => {
		await $api.post('api/rooms/create/room', { name, lostMembers });
	},
	getGroupList: async (username: string) => {
		const response = await $api.get(`api/rooms/${username}`);
		return response.data;
	}
};

export default api;