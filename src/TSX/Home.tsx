import React from 'react';

const Home: React.FC = () => {
    return (
        <div style={{
            backgroundColor: 'yellowgreen',
            padding: '20px',
            display: 'flex', // Enables flex layout
            flexDirection: 'column', // Stack elements vertically
            alignItems: 'flex-start' // Align all items to the left
        }}>
            {/* Text Section */}
            <h2 style={{ color: 'black' }}>Home Page</h2>
            <p style={{ color: 'black' }}>Welcome to the Home page</p>

            <div style={{ color: 'darkred' }}>
                {/* Text with line breaks */}
                <p>Introduction: React Router is a library for handling routing and navigation</p>
                <p>in React JS Applications. It allows you to create dynamic routes providing</p>
                <p>a seamless user experience by mapping various URLs to components</p>
                <p>It enables navigation in single-page application (SPA) without refreshing the entire page.</p>
            </div>

            {/* Image Section */}

        </div>
    );
};

export default Home;
