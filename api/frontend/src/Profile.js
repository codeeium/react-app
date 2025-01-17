import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

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

        fetchProfile();
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

        fetchActivityLogs();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear token from localStorage
        setProfile(null); // Clear profile information
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Profile</h2>
            {message && <div className="alert alert-warning">{message}</div>}

            {profile && (
                <div className="card mb-4">
                    <div className="card-header d-flex align-items-center">
                        <img
                            src={profile.avatar || 'https://via.placeholder.com/40'}
                            alt="Profile Icon"
                            className="rounded-circle me-3"
                            style={{ width: '40px', height: '40px' }}
                        />
                        <h5 className="mb-0">{profile.username}</h5>
                    </div>
                    <div className="card-body">
                        <p>Other user details can go here.</p>
                        <button
                            className="btn btn-danger"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
            )}

            {activityLogs.length > 0 && (
                <div className="card">
                    <div className="card-header">
                        <h3 className="mb-0">Activity Logs</h3>
                    </div>
                    <ul className="list-group list-group-flush">
                        {activityLogs.map((log, index) => (
                            <li key={index} className="list-group-item">
                                <strong>{log.message}</strong> -{' '}
                                <small>{new Date(log.timestamp).toLocaleString()}</small>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Profile;
