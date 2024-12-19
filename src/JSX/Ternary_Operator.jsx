import React from 'react';

function App() {
    // Example states
    const isLoggedIn = true;
    const isAdmin = false;
    const isButtonDisabled = false;

    return (
        <div>
            {/* Conditional Rendering */}
            {isLoggedIn ? (
                <h1>Welcome back! (conditional rendering )</h1>
            ) : (
                <h1>Please sign in to continue.</h1>
            )}

            {/* Conditional Class Assignment */}
            <button className={isAdmin ? 'admin-button' : 'user-button'}>
                {isAdmin ? 'Admin Dashboard' : 'User Dashboard Conditional Class'}
            </button>

            {/* Conditional Inline Styling */}
            <button
                style={{
                    backgroundColor: isButtonDisabled ? 'gray' : 'orangered',
                    color: 'white',
                }}
                disabled={isButtonDisabled}
            >
                {isButtonDisabled ? 'Disabled' : 'Click Me -> Conditional Inline Styling'}
            </button>

            {/* Nested Ternary (Use with caution) */}
            <p>
                {isLoggedIn
                    ? isAdmin
                        ? 'You have admin privileges.'
                        : 'You are logged in as a user  (-> Nested Ternary).'
                    : 'You are not logged in.'}
            </p>

            <>
                <h1>Conditional Rendering</h1>
                <button onClick={() => alert('Hello, World!')}>Click Me</button>
            </>
            {/*<>*/}
            {/*    <h1>Conditional Rendering</h1>*/}
            {/*    <h1>Conditional Class Assignment</h1>*/}
            {/*    <h1>Conditional Inline Styling</h1>*/}
            {/*    <h1>Nested Ternary (Use with caution)</h1>*/}
            {/*</>*/}
        </div>
    );
}

export default App;
