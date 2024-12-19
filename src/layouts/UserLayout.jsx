import React from 'react';
import { Outlet } from 'react-router-dom';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';

const UserLayout = () => {
  return (
    <div>
      <header>
        {/* Add your header/navbar here */}
        <h1>User Layout Header</h1>
      </header>
      
      <div className="container mt-3">
        <Breadcrumb />
        <main className="mt-3">
          {/* This is where nested routes will be rendered */}
          <Outlet />
        </main>
      </div>
      
      <footer>
        {/* Add your footer here */}
        <p>User Layout Footer</p>
      </footer>
    </div>
  );
};

export default UserLayout;
