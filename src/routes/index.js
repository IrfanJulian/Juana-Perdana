import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home'
import Profile from '../pages/profile'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navigate to="Home" replace="true"/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router