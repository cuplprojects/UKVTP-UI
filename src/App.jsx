import { useState } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserLayout from './layouts/userLayout';
import GuestLayout from './layouts/guestLayout';
import { Routes, Route } from 'react-router-dom';
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<GuestLayout />} />
        <Route path="/user" element={<UserLayout />} />
      </Routes>
    </>
  )
}

export default App
