import React from 'react';
import './ChatPage.scss'
import Chat from '../../features/chat/ui/Chat.tsx';
import MessageInput from '../../features/messageInput/ui/messageInput.tsx';
import AsidePanel from '../AsidePanel/AsidePanel.tsx';

const ChatPage: React.FC = () => {
	

	return (
		<div className="chat-page">
				<AsidePanel/>
			<div className='main-chat'>
				<Chat/>
				<div className="message-input"><MessageInput/></div>
			</div>
		</div>
	);
};

export default ChatPage;