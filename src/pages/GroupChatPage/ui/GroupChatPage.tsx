import React from 'react';
import PrivateChat from '../../../features/privateChat/ui/PrivateChat.tsx';
import GroupMessageInput from '../../../features/groupMessageInput/ui/GroupMessageInput.tsx';
import AsidePanel from '../../AsidePanel/AsidePanel.tsx';
import GroupChat from '../../../features/groupChat/ui/GroupChat.tsx';

const PrivateChatPage: React.FC = () => {
	return (
		<div>
			<div className="chat-page">
				<AsidePanel/>
				<div className='main-chat'>
					<GroupChat />
					<div className="message-input"><GroupMessageInput/></div>
				</div>
			</div>
		</div>
	);
};

export default PrivateChatPage;