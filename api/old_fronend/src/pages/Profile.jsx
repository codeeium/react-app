// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
//
// const Profile = () => {
//     const [profile, setProfile] = useState(null);
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         const fetchProfile = async () => {
//             const token = localStorage.getItem('token');
//             if (!token) {
//                 navigate('/login');
//                 return;
//             }
//
//             const response = await fetch('http://localhost:5038/api/profile', {
//                 headers: { Authorization: `Bearer ${token}` },
//             });
//             const data = await response.json();
//             setProfile(data);
//         };
//
//         fetchProfile().then(r => console.log(r));
//     }, [navigate]);
//
//     return (
//         <div>
//             {profile ? (
//                 <div>
//                     <h1>{profile.username}</h1>
//                     <p>{profile.email}</p>
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// };
//
// export default Profile;
