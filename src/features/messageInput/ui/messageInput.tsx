import React, { useState } from 'react';
import './messageInput.scss'
import api from '../../../shared/api/instance.ts';
import axios from 'axios';

const MessageInput: React.FC = () => {
	const [message, setMessage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { username } = JSON.parse(localStorage.getItem('user'));

		try	{
			await axios.post('http://10.4.3.155:3000/api/chat/send', {username, message});
			setMessage('');
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="message-input-container">
			<form className="input-container" onSubmit={handleSubmit}>
				<input
					className="message-input-func"
					type='text'
					placeholder='Message'
					value={message}
					onChange={e => setMessage(e.target.value)}
				/>
				<button className="send-button" type='submit'>
					<img src="./../../../../public/send_118689.svg" alt="Отправить" />
				</button>
			</form>
		</div>
	);
};

export default MessageInput;
