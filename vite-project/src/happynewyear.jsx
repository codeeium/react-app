import React from 'react';

const HappyNewYear = () => {
    const currentYear = new Date().getFullYear() +1;
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>
                🌸✨ Wishing you a Happy New Year in advance! {currentYear} ✨🌸
            </h1>
            <p style={styles.message}>
                🌼✨🌟🌼✨🌟🌼🌼✨🌟🌼✨🌟🌼🌼✨🌟🌼✨🌟🌼   🌼✨🌟🌼✨🌟🌼✨🌟🌼✨🌟🌼✨🌟🌼✨🌟🌼✨🌟🌼✨🌟🌼✨🌟🌼✨🌟🌼✨🌟🌼✨🌟
            </p>
        </div>
    );
}

const styles = {
    container: {
        position: 'absolute',
        top: '20px', // Adjust to move it down if needed
        left: '20px', // Position it to the left
        color: '#333',
    },
    heading: {
        fontSize: '3rem',
        fontWeight: 'bold',
        color: '#ff6347',
    },
    message: {
        fontSize: '1.5rem',
        color: '#4caf50',
    }
};

export default HappyNewYear;
