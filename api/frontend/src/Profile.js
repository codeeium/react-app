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
                        Authorization: `Bearer ${token}`, // Ensure the "Bearer " prefix
                    },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    setMessage(errorData.error || 'Failed to fetch profile');
                    return;
                }

                const result = await response.json();
                setProfile(result); // Assuming API returns { username, profileImage }
            } catch (error) {
                console.error('Error fetching profile:', error);
                setMessage('An error occurred while fetching the profile.');
            }
        };

        fetchProfile();
    }, [navigate]);

    return (
        <div className="profile-container">
            <h2>Profile</h2>
            {message && <p>{message}</p>}
            {profile && (
                <div className="profile-details">
                    <div className="profile-header">
                        <img
                            src={profile.profileImage || 'https://via.placeholder.com/40'}
                            alt={`${profile.username}'s profile`}
                            className="profile-icon"
                        />
                        <p className="username">{profile.username}</p>
                    </div>
                    <p>Other user details can go here.</p>
                </div>
            )}
        </div>
    );
};

export default Profile;
