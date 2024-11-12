import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotificationContainer } from './common/components/NotificationContainer'


import { SignIn } from './modules/auth/signIn/signIn'
import { SignUp } from './modules/auth/signUp/signUp'
import { Teams } from './modules/dashboard/teams/teams'


 const App: React.FC = () => {



  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<SignIn/> } />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/teams" element={<Teams />} />
        
      </Routes>

      <NotificationContainer />
    </BrowserRouter>
  );
};

export default App

/*

 <Route path="/teams" element={<Teams />} />

Go to main Page
*/


