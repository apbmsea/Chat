import React, { useEffect, useState } from 'react';
import './ChatsList.scss'
import { useNavigate } from 'react-router-dom';
import api from '../../../shared/api/instance';

const ChatsList: React.FC = () => {
    const navigate = useNavigate()

    const [chats, setChats] = useState([
        {
            username: "Общий чат"
        },
        {
            username: "Mike"
        },
        {
            username: "Andrew"
        },
        {
            username: "Anya"
        }
    ])

    const handleClick = (name: string) => {
        navigate("/chat/" + name)
    }

    const fetchChats= async () =>{
		try	{
			const response = await api.getUsersList()
			setChats(response);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchChats();

		const interval = setInterval(fetchChats, 1000);

		return () => {
			clearInterval(interval);
		}
	}, [])


	return (
        <div className="chats">
            <div className='chats-title'>
                Открыть чат:
            </div>
			<ul className='chats-list'>
				{chats.map((chat, index) => (
					<li className="chats-list-item" key={index} onClick={() => {
                        handleClick(chat.username)
                    }}>
						{chat.username} 
					</li>
				))}
			</ul>
		</div>
	);
};

export default ChatsList;