import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [message, setMessage] = useState('');
    const [activityLogs, setActivityLogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setMessage('Unauthorized. Please log in.');
                navigate('/login');
                return;
            }

            const response = await fetch('http://localhost:5038/api/profile', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                setMessage(errorData.error || 'Failed to fetch profile');
                return;
            }

            const result = await response.json();
            setProfile(result);
        };

        fetchProfile().then(r =>
            console.log(r));
    }, [navigate]);

    useEffect(() => {
        const fetchActivityLogs = async () => {
            const token = localStorage.getItem('token');
            if (!token) return;

            const response = await fetch('http://localhost:5038/api/activity-logs', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const logs = await response.json();
                setActivityLogs(logs);
            }
        };

        fetchActivityLogs().then(r =>
            console.log(r));
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear token from localStorage
        setProfile(null); // Clear profile information
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="profile-container">
            <h2>Profile</h2>
            {message && <p>{message}</p>}
            {profile && (
                <div className="profile-details">
                    <div className="profile-header">
                        <img src={'/Users/developer1/WebstormProjects/react-app/api/frontend/public/logo192.png' || 'https://via.placeholder.com/40'} alt="Profile Icon" className="profile-icon" />
                        <p className="username">{profile.username}</p>
                    </div>
                    <p>Other user details can go here.</p>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            )}
            {activityLogs.length > 0 && (
                <div className="activity-logs">
                    <h3>Activity Logs</h3>
                    <ul>
                        {activityLogs.map((log, index) => (
                            <li key={index}>
                                {log.message} - {new Date(log.timestamp).toLocaleString()}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Profile;
