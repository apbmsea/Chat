import React from 'react';
import './ChatPage.scss'
import Chat from '../../features/chat/ui/Chat.tsx';
import MessageInput from '../../features/messageInput/ui/messageInput.tsx';
import ChatsList from '../../features/chatsList/ui/ChatsList.tsx';
import Logout from '../../features/logout/ui/Logout.tsx';
import UserList from '../../features/userList/ui/UserList.tsx';

const ChatPage: React.FC = () => {
	

	return (
		<div className="chat-page">
			<div className="chat-block-1">
				<ChatsList/>
				<Logout/>
			</div>
			<div className='main-chat'>
				<Chat/>
				<div className="message-input"><MessageInput/></div>
			</div>
			<UserList/>
		</div>
	);
};

export default ChatPage;