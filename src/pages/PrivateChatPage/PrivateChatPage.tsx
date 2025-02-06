import React from 'react';
import PrivateChat from '../../features/privateChat/ui/PrivateChat.tsx';
import PrivateMessageInput from '../../features/privateMessageInput/ui/PrivateMessageInput.tsx';
import AsidePanel from '../AsidePanel/AsidePanel';

const PrivateChatPage: React.FC = () => {
	return (
		<div>
			<div className="chat-page">
				<AsidePanel/>
				<div className='main-chat'>
					<PrivateChat />
					<div className="message-input"><PrivateMessageInput/></div>
				</div>
			</div>
		</div>
	);
};

export default PrivateChatPage;