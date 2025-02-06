import React, { useState } from "react";
import CreateRoomModal from "../../createRoomModel/ui/CreateRoomModel.tsx";

import './CreateRoomButton.scss'
import api from '../../../shared/api/instance.ts';

const CreateRoomButton: React.FC = () => {
	const [isModalOpen, setModalOpen] = useState(false);

	const handleCreateRoom = async (roomName: string, users: string[]) => {
		try {
			console.log(roomName, users);
			const response = await api.createRoom(roomName, users);
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div>
			<button className="create-room-btn" onClick={() => setModalOpen(true)}>Создать комнату</button>
			<CreateRoomModal
				isOpen={isModalOpen}
				onClose={() => setModalOpen(false)}
				onSubmit={handleCreateRoom}
			/>
		</div>
	);
};

export default CreateRoomButton;
