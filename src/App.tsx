import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { SignIn } from './modules/auth/signIn/signIn'
import { SignUp } from './modules/auth/signUp/signUp'
import { Teams } from './modules/dashboard/teams/teams'


 const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        className="notification"
        position="top-right" autoClose={5000} />
      <Routes>
        <Route path="/" element={<SignIn/> } />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/teams" element={<Teams />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App

/*

 <Route path="/teams" element={<Teams />} />

Go to main Page
*/


