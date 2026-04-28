import React, { useContext } from 'react';
import Login from './components/login/Login.jsx';
import SignUp from './components/login/SignUp.jsx';
import { Routes,Route, Navigate } from 'react-router-dom';
import Notfound from './components/notfound.JSX';
import Chat from './components/chat-ui/Chat.jsx';
import MyProfile from './components/myProfile/MyProfile.jsx';
import {Toaster} from 'react-hot-toast';
import { AuthContext } from '../context/AuthContext';

const App = () => {
  const {AuthUser} = useContext(AuthContext);
  
  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/profile' element={AuthUser ? <MyProfile />: <Navigate to="/SignUp" /> } />
        <Route path='/chat' element={AuthUser ? <Chat />: <Navigate to="/SignUp" />} />
        <Route path="/" element={!AuthUser ? <Login />: <Navigate to="/chat" />} />
        <Route path='/SignUp' element={!AuthUser ? <SignUp />: <Navigate to="/chat" />} />
        {/*---- 404 error  ----*/}
        <Route path='*' element={<Notfound />} />
      </Routes>   
    </>
  )
}

export default App
