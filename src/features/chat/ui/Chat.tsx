import React, { useEffect, useState } from 'react';
import api, { BASE_URL } from '../../../shared/api/instance.ts';
import './Chat.scss';

const Chat: React.FC = () => {
	const [messages, setMessages] = useState([
		{
			username: 'alex',
			message: 'Пацаны видели выкатили обнову на реакт?????'
		},
		{ username: 'mike', message: 'Нифига там добавили!!!!!!' },
		{ username: 'leha', message: 'А я до сих пор пишу на php' },
		{
			username: 'alex',
			message: 'Я думал динозавры уже вымерили, оказывается нет...'
		}
	]);

	const fetchMessages= async () =>{
		try	{
			const response = await api.getMessagesList()
			setMessages(response);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchMessages();

		const interval = setInterval(() => fetchMessages(), 1000);

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
							<i>{msg.username}:</i> <div className="message">{msg.message}</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Chat;
