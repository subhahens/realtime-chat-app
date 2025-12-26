import React from 'react'
import Login from './components/login/login'
import SignUp from './components/login/signUp'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>   
    </>
  )
}

export default App
