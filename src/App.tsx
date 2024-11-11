import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomNotification from './common/ui/notification/notification'
import { hideNotification } from './redux/slices/notificationSlice'

import { SignIn } from './modules/auth/signIn/signIn'
import { SignUp } from './modules/auth/signUp/signUp'
import { Teams } from './modules/dashboard/teams/teams'


 const App: React.FC = () => {
  const dispatch = useDispatch();

  const notification = useSelector((state: { notification: {message:'', visible:false} }) => state.notification);
  
  React.useEffect( () => {
    if(notification?.visible) {
      const timer = setTimeout(()=>{
        dispatch(hideNotification());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification?.visible, dispatch]);

  return (
    <BrowserRouter>
     <div>
      {notification?.visible && <CustomNotification message={notification.message} />}
     </div>
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


