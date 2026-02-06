import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const Login = () => {
    const [user,setUser] = useState("");
    const [pass, setPass] = useState("")
    const check = (e) => {
        e.preventDefault();
        console.log("check pass");
        
    }
    const username = (elem) => {
        setUser(elem.target.value);
    }
    const password = (elem) => {
        setPass(elem.target.value);
    }
    return (
        <div className='w-full h-screen flex items-center justify-center animated-bg'>
            <form className='w-100 h-120 bg-gray-700 rounded-xl flex items-center justify-center gap-10 flex-col border-2 border-gray-700  bg-blur-xl ' 
            onSubmit={(e) => {
                    check(e);
                }
            }
            >
                <h2 className='text-5xl  text-white shadow-4xl'>USER LOGIN</h2>
                <input type="text" onChange={(elem)=>{
                    username(elem);
                }} className='w-80 h-12 bg-amber-50 text-2xl rounded-2xl shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:border-3  focus:border-sky-500 focus:outline-none focus:shadow-outline-sky-500' placeholder='username' name="username" id="user" />
                <input type="password" onChange={(elem)=>{
                    password(elem);
                }} className='w-80 h-12 bg-amber-50 text-2xl rounded-2xl shadow appearance-none border py-2 px-3 text-gray-700 leading-tight focus:border-3 focus:border-sky-500 focus:outline-none focus:shadow-outline-sky-500' placeholder='password' name="password" id="pass" />
                <label className='w-80 flex text-white gap-4'><span>forget password ? <a onClick={()=>{
                    alert("not working right now !")
                }} className='text-blue-200 underline cursor-pointer'>click here</a></span></label>
                <button className='w-80 h-15 bg-indigo-500  shadow-lg shadow-indigo-500/50 active:scale-90  cursor-pointer text-white text-2xl rounded-xl' 
                type="submit"
                >LOGIN</button>
                <h3 className='text-white'>if you are not register,  <Link to='/SignUp' className='text-blue-200 cursor-pointer underline'>register here</Link></h3>
            </form>
        </div>
    )
}

export default Login
