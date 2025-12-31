import React from 'react'
import Login from './components/login/login'
import SignUp from './components/login/signUp'
import { Routes,Route } from 'react-router-dom'
import Notfound from './components/notfound.JSX'
import Chat from './components/chat-ui/chat'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        {/*---- 404 error  ----*/}
        <Route path='*' element={<Notfound />} />
      </Routes>   
    </>
  )
}

export default App
