import React, { useEffect, useState } from 'react';
import api, { BASE_URL } from '../../../shared/api/instance.ts';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PrivateChat: React.FC = () => {

	const [messages, setMessages] = useState([
		{
			username: '',
			message: 'Чат пустой...'
		}
	]);

	const { username } = JSON.parse(localStorage.getItem('user'));

	const { name } = useParams()

	const fetchMessages = async () => {
		try {
			const response = await axios.get('http://10.4.3.155:3000/api/ls/chat', {
				params: {
					senderUsername: username,
					receiverUsername: name
				}
			});
			setMessages(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		fetchMessages();

		const interval = setInterval(fetchMessages, 1000);

		return () => {
			clearInterval(interval);
		}
	}, [])

	return (
		<div className='chat'>
			<div className="chat-info"><h1>{BASE_URL}</h1></div>
			<div className="chat-container">
				<ul className='chat-list'>
					{messages.map((msg, index) => (
						<li className="chat-list-item" key={index}>
							<i>{msg?.sender?.username}:</i> <div className="message">{msg.message}</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PrivateChat;
