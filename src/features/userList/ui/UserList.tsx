import React, { useEffect, useState } from 'react';
import './UserList.scss'
import api from '../../../shared/api/instance.ts';

const UserList: React.FC = () => {
	const [users, setUsers] = useState([]);

	const handleCLick = async () => {
		try {
			const { username } = JSON.parse(localStorage.getItem('user'));
			await api.logout(username);
			localStorage.removeItem('user');
			window.location.href = '/';
		} catch (e) {
			console.error(e);
		}
	}

	const fetchUsers= async () =>{
		try	{
			const response = await api.getUsersList()
			setUsers(response);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		fetchUsers();

		const interval = setInterval(fetchUsers, 1000);

		return () => {
			clearInterval(interval);
		}
	}, [])

	return (
		<div className="user">
			<div className="user-header">
				<p>Пользователи в чате</p>
			</div>
			<ul className="user-list">
				{users.map((user, index) => (
					<li className="user-list-item" key={index}>{user.username}</li>
				))}
			</ul>
			<button onClick={handleCLick}>Выйти из чата</button>
		</div>
	);
};

export default UserList;