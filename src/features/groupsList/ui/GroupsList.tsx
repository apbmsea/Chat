import React, { useEffect, useState } from 'react';
import '../../userList/ui/UserList.scss'
import { useNavigate } from 'react-router-dom';
import api from '../../../shared/api/instance';

const GroupList: React.FC = () => {
	const navigate = useNavigate()

	const [groups, setGroups] = useState([
		{
			username: "Лютые кодеры"
		},
		{
			username: "Ровные пацыки"
		},
		{
			username: "Тигры"
		},
		{
			username: "Рыбалка мужики"
		},
		{
			username: "Рыбалка мужики"
		},
		{
			username: "Рыбалка мужики"
		},
		{
			username: "Рыбалка мужики"
		},
		{
			username: "Рыбалка мужики"
		},
		{
			username: "Рыбалка мужики"
		},
		{
			username: "Рыбалка мужики"
		},
		{
			username: "Рыбалка мужики"
		},
		{
			username: "Рыбалка мужики"
		},
	])

	const handleClick = (group: string) => {
		navigate("/chat/group/" + group)
	}

	const fetchGroups= async () =>{
		try	{
			const { username } = JSON.parse(localStorage.getItem('user'));
			const response = await api.getGroupList(username);
			setGroups(response);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchGroups();

		const interval = setInterval(fetchGroups, 1000);

		return () => {
			clearInterval(interval);
		}
	}, [])


	return (
		<div className="chats">
			<div className='chats-title'>
				Ваши группы:
			</div>
			<ul className='chats-list'>
				{groups.map((group, index) => (
					<li className="chats-list-item" key={index} onClick={() => {
						handleClick(group.username)
					}}>
						{group.username}
					</li>
				))}
			</ul>
		</div>
	);
};

export default GroupList;