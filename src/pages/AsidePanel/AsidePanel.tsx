import React from 'react';
import ChatsList from '../../features/chatsList/ui/ChatsList.tsx';
import GroupsList from '../../features/groupsList/ui/GroupsList.tsx';
import CreateRoomButton from '../../features/createRoomButton/ui/CreateRoomButton.tsx';
import Logout from '../../features/logout/ui/Logout.tsx';

import './AsidePanel.scss'

const AsidePanel: React.FC = () => {
	return (
		<div>
			<div className="chat-block-1">
				<div className="chat-list-users-groups">
					<ChatsList />
					<GroupsList />
				</div>
				<CreateRoomButton />
				<Logout />
			</div>
		</div>
	);
};

export default AsidePanel;