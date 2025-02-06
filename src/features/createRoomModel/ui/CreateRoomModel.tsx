import React, { useState } from "react";
import "./CreateRoomModel.scss";

interface Props {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (roomName: string, users: string[]) => void;
}

const CreateRoomModal: React.FC<Props> = ({ isOpen, onClose, onSubmit }) => {
	const [roomName, setRoomName] = useState("");
	const [usernameInput, setUsernameInput] = useState("");
	const [selectedUsers, setSelectedUsers] = useState<string[]>([]);

	const handleAddUser = () => {
		const trimmedUsername = usernameInput.trim();
		if (trimmedUsername && !selectedUsers.includes(trimmedUsername)) {
			setSelectedUsers((prev) => [...prev, trimmedUsername]);
			setUsernameInput("");
		}
	};

	const handleRemoveUser = (username: string) => {
		setSelectedUsers((prev) => prev.filter((user) => user !== username));
	};

	const handleSubmit = () => {
		if (!roomName.trim()) return;
		onSubmit(roomName, selectedUsers);
		setRoomName("");
		setSelectedUsers([]);
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className="modal-overlay" onClick={onClose}>
			<div className="modal-content" onClick={(e) => e.stopPropagation()}>
				<h2>Создать комнату</h2>
				<input
					type="text"
					placeholder="Название комнаты"
					value={roomName}
					onChange={(e) => setRoomName(e.target.value)}
				/>

				<div className="user-input">
					<input
						type="text"
						placeholder="Введите имя пользователя"
						value={usernameInput}
						onChange={(e) => setUsernameInput(e.target.value)}
						onKeyDown={(e) => e.key === "Enter" && handleAddUser()}
					/>
					<button onClick={handleAddUser}>Добавить</button>
				</div>

				<div className="selected-users">
					{selectedUsers.map((username) => (
						<span key={username} className="user-tag">
              {username}
							<button onClick={() => handleRemoveUser(username)}>×</button>
            </span>
					))}
				</div>

				<div className="modal-actions">
					<button className="cancel" onClick={onClose}>
						Отмена
					</button>
					<button className="submit" onClick={handleSubmit}>
						Создать
					</button>
				</div>
			</div>
		</div>
	);
};

export default CreateRoomModal;
