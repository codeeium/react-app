import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [message, setMessage] = useState('');
    const [activityLogs, setActivityLogs] = useState([]);
    const navigate = useNavigate();

    // Fetch profile data
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

    // Fetch activity logs
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

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear token from localStorage
        setProfile(null); // Clear profile information
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Profile</h2>
            {message && <div className="alert alert-warning">{message}</div>}

            {/* Profile Card */}
            {profile && (
                <div className="card mb-4 shadow">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-4 text-center p-4">
                            <img
                                src={profile?.avatar && profile.avatar.trim() !== '' ? profile.avatar : 'https://avatar.iran.liara.run/public/boy?username=Ash'}
                                alt="Profile"
                                className="img-fluid rounded-circle"
                                style={{width: '150px', height: '150px', objectFit: 'cover'}}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{profile.username}</h5>
                                <p className="card-text">Email: {profile.email || 'Not provided'}</p>
                                <p className="card-text">
                                    <small className="text-muted">Joined: {new Date(profile.createdAt).toLocaleDateString()}</small>
                                </p>
                                <button
                                    className="btn btn-danger"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Activity Logs */}
            {activityLogs.length > 0 && (
                <div className="card shadow">
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
