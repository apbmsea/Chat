import React, { useState } from 'react';
import api from '../../../shared/api/instance.ts';
import './LoginForm.scss'


const LoginForm: React.FC = () => {
	const [state, setState] = useState({
		fio: '',
		username: ''
	});

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await api.register(state);
				localStorage.setItem('user', JSON.stringify(state));
				window.location.href = '/chat';
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
				<button type='submit'>Войти</button>
			</form>
		</div>
	);
};

export default LoginForm;
