import React from 'react';

const About: React.FC = () => {
    return (
        <>
            <div style={{
                backgroundColor: 'lightgray',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column', // Stack elements vertically
                alignItems: 'flex-start' // Align everything to the left
            }}>
                {/* Text Section */}
                <div>
                    <h2 style={{ color: 'black', margin: '0' }}>About Page</h2>
                    <p style={{ color: 'black', marginTop: '10px' }}>
                        Welcome to the About page
                    </p>
                </div>

                {/* Image Section */}
                <img
                    src="/img.png"
                    alt="About Page"
                    style={{
                        width: '400px',
                        height: 'auto',
                        marginTop: '10px' // Add spacing between text and image
                    }}
                />
            </div>
        </>
    );
};

export default About;
