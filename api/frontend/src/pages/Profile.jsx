import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [message, setMessage] = useState('');
    const [activityLogs, setActivityLogs] = useState([]);
    const [loadingProfile, setLoadingProfile] = useState(true);
    const [loadingLogs, setLoadingLogs] = useState(true);
    const navigate = useNavigate();
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL||'http://13.42.26.150:5038';
    // Fetch profile data
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    setMessage('Unauthorized. Please log in.');
                    navigate('/login');
                    return;
                }

                const response = await fetch(`${API_BASE_URL}/api/profile`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    console.error('Profile fetch failed with status:', response.status);
                    const errorData = await response.json();
                    setMessage(errorData.error || 'Failed to fetch profile');
                    return;
                }

                const result = await response.json();
                setProfile(result);
                setLoadingProfile(false); // Set loading to false after successful profile fetch
            } catch (error) {
                console.error('Network or other error while fetching profile:', error);
                setMessage('Failed to fetch profile');
                setLoadingProfile(false); // Stop loading even on error
            }
        };

        fetchProfile().catch(
            (error) => {
                console.error('Network or other error while fetching profile:', error);
                setMessage('Failed to fetch profile');
                setLoadingProfile(false); // Stop loading even on error
            }
        );
    }, [navigate]);

    // Fetch activity logs
    useEffect(() => {
        const fetchActivityLogs = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) return;

                const response = await fetch(`${API_BASE_URL}/api/activity-logs`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    console.error('Activity Logs fetch failed with status:', response.status);
                    const errorData = await response.json();
                    console.error('Activity Logs fetch error:', errorData);
                    return;
                }

                const logs = await response.json();
                setActivityLogs(logs);
                setLoadingLogs(false); // Stop loading after successful log fetch
            } catch (error) {
                console.error('Network or other error while fetching activity logs:', error);
                setLoadingLogs(false); // Stop loading even on error
            }
        };

        fetchActivityLogs().then(
            () => {},
            (error) => {
                console.error('Network or other error while fetching activity logs:', error);
                setLoadingLogs(false); // Stop loading even on error
            }
        );
    }, []);

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear token from localStorage
        setProfile(null); // Clear profile information
        setActivityLogs([]); // Clear activity logs
        navigate('/login'); // Redirect to login page
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Profile</h2>
            {message && <div className="alert alert-warning">{message}</div>}

            {/* Profile Card */}
            {loadingProfile ? (
                <p>Loading profile...</p> // Show a loading message if the profile is being fetched
            ) : profile ? (
                <div className="card mb-4 shadow">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-4 text-center p-4">
                            <img
                                src={profile?.avatar && profile.avatar.trim() !== '' ? profile.avatar : 'https://avatar.iran.liara.run/public/boy?username=Ash'}
                                alt="Profile"
                                className="img-fluid rounded-circle"
                                style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                            />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{profile.username}</h5>
                                <p className="card-text">Email: {profile.email || 'Not provided'}</p>
                                <p className="card-text">
                                    <small className="text-muted">Joined: {new Date(profile.createdAt).toLocaleDateString()}</small>
                                </p>
                                <button className="btn btn-danger" onClick={handleLogout}>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No profile available.</p>
            )}

            {/* Activity Logs */}
            {loadingLogs ? (
                <p>Loading activity logs...</p> // Show a loading message while fetching activity logs
            ) : activityLogs.length > 0 ? (
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
            ) : (
                <p>No activity logs available.</p> // Show message if there are no activity logs
            )}
        </div>
    );
};

export default Profile;
