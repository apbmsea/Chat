import React, { useEffect, useState } from 'react';
import api, { BASE_URL } from '../../../shared/api/instance.ts';
import './Chat.scss';
import { useParams } from 'react-router-dom';

const Chat: React.FC = () => {

	const [messages, setMessages] = useState([
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},

		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},
		{
			username: '',
			message: 'Чат пустой...'
		},

	]);

	const { sender } = JSON.parse(localStorage.getItem('user'));

	const { name } = useParams()

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
							<i>{msg.username}:</i> <div className="message">{msg.message}</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Chat;
