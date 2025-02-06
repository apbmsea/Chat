import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../shared/api/instance.ts';

const PrivateMessageInput: React.FC = () => {
	const { name } = useParams()
	const receiverUsername = name

	const [message, setMessage] = useState('');

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const { username } = JSON.parse(localStorage.getItem('user'));
		const senderUsername = username;

		try	{
			await api.sendPrivateMessage(senderUsername, receiverUsername, message)
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

export default PrivateMessageInput;
