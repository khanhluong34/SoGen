import React from 'react'
import {Routes, Route } from 'react-router-dom'

import LoginPage from './pages/Login/LoginPage'
import HomePage from './pages/Home/HomePage'
import LandingPage from './pages/Landing/LandingPage'
import AdminPage from './pages/Admin/AdminPage'

export default function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={ <LandingPage/> }/>
                <Route path="/login" element={ <LoginPage/> }/>
                <Route path="/home" element={ <HomePage/> }/>
                <Route path="/admin" element={ <AdminPage/> }/>
            </Routes>      
        </div>
    )
}


