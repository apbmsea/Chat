import api from '../../../shared/api/instance.ts';
import React from 'react';
import './Logout.scss'

const Logout: React.FC = () => {
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

    return(
        <button className="logout-btn" onClick={handleCLick}>Выйти из чата</button>
    )
}

export default Logout;