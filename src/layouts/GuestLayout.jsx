import React from 'react';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';

const GuestLayout = () => {
    return (
        <div>
            <header>
                <h1>Welcome to Our App</h1>
            </header>
            
            <div className="container mt-3">
                <Breadcrumb />
                <main className="mt-3">
                    {/* Add your login form or guest content here */}
                    <div>
                        <h2>Login</h2>
                        {/* Add your login form */}
                    </div>
                </main>
            </div>
            
            <footer>
                <p>Guest Layout Footer</p>
            </footer>
        </div>
    );
};

export default GuestLayout;
