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
                    headers: { Authorization: token },
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    setMessage(errorData.error || 'Failed to fetch profile');
                    return;
                }

                const result = await response.json();
                setProfile(result);
            } catch (error) {
                setMessage('Error fetching profile');
            }
        };

        fetchProfile().then(r =>
            console.log(r));
    }, [navigate]);

    return (
        <div>
            <h2>Profile</h2>
            {message && <p>{message}</p>}
            {profile && <p>Username: {profile.username}</p>}
        </div>
    );
};

export default Profile;
