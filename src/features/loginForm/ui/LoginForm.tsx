import React, { useState } from 'react';
import api from '../../../shared/api/instance.ts';
import './LoginForm.scss'
import { setBaseUrl } from '../../../shared/api/instance.ts';

const LoginForm: React.FC = () => {
	const [state, setState] = useState({
		fio: '',
		username: ''
	});

	const [server, setServer] = useState('https://server1.example.com'); // По умолчанию выбран первый сервер

	const handleServerChange = (e) => {
		const selectedServer = e.target.value;
		setServer(selectedServer);
		setBaseUrl(selectedServer); // Обновляем BASE_URL
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await api.register(state);

			if (response.status < 400) {
				localStorage.setItem('user', JSON.stringify(state));
				window.location.href = '/chat';
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className='login'>
			<form className='login-form' onSubmit={handleSubmit}>
				<h1>CHAT.DEV</h1>
				<input
					value={state.fio}
					onChange={e => setState(prev => ({ ...prev, fio: e.target.value }))}
					placeholder='Имя Фамилия'
					type='text'
				/>
				<input
					value={state.username}
					onChange={e =>
						setState(prev => ({ ...prev, username: e.target.value }))
					}
					placeholder='Никнейм'
					type='text'
				/>
				<select value={server} onChange={handleServerChange}>
					<option value="http://localhost:3000">Сервер 1</option>
					<option value="http://localhost:3000">Сервер 2</option>
					<option value="http://localhost:3000">Сервер 3</option>
				</select>
				<button type='submit'>Войти</button>
			</form>
		</div>
	);
};

export default LoginForm;
