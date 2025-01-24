import React from 'react';
import './ChatPage.scss'
import UserList from '../../features/userList/ui/UserList.tsx';
import Chat from '../../features/chat/ui/Chat.tsx';
import MessageInput from '../../features/messageInput/ui/messageInput.tsx';

const ChatPage: React.FC = () => {
	return (
		<div className="chat-page">
			<UserList/>
			<div>
				<Chat/>
				<div className="message-input"><MessageInput/></div>
			</div>
		</div>
	);
};

export default ChatPage;