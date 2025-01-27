import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setMessage('Unauthorized. Please log in.');
                navigate('/login');
                return;
            }

            try {
                const response = await fetch('http://localhost:5038/api/profile', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    console.error('Error fetching profile:', errorData);
                    setMessage(errorData.error || 'Failed to fetch profile');
                    return;
                }

                const data = await response.json();
                setProfile(data);
            } catch (error) {
                console.error('Network error:', error);
                setMessage('Failed to fetch profile due to a network error');
            }
        };

        fetchProfile();
    }, [navigate]);

    return (
        <div>
            {message && <div className="alert alert-warning">{message}</div>}

            {profile ? (
                <div>
                    <h1>{profile.username}</h1>
                    <p>{profile.email}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;
