import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { SignIn } from './modules/auth/signIn/signIn'
import { SignUp } from './modules/auth/signUp/signUp'


 const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn/> } />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default App

/*

 <Route path="/teams" element={<Teams />} />

Go to main Page
*/


