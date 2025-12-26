import React from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div>
      <div className='w-full h-screen  bg-linear-45 from-pink-600 to-indigo-500 flex m-0 p-0 items-center justify-center'>
        <form className='w-100 h-120 bg-gray-700 rounded-xl flex items-center justify-center gap-10 flex-col border-2 border-gray-700  bg-blur-xl '
            onSubmit={(e) => {
              check(e);
            }
          }
        >
          <h2 className='text-5xl text-white shadow-4xl'>USER SIGN UP</h2>
          <input type="text" className='w-80 h-12 bg-amber-50 text-2xl rounded-2xl shadow appearance-none border py-2 px-3 text-gray-700 leading-tight  focus:border-sky-500 focus:outline-none focus:shadow-outline-sky-500' placeholder='username' name="username" id="user" />
          <input type="password" className='w-80 h-12 bg-amber-50 text-2xl rounded-2xl shadow appearance-none border py-2 px-3 text-gray-700 leading-tight  focus:border-sky-500 focus:outline-none focus:shadow-outline-sky-500' placeholder='password' name="password" id="pass" />
          <label className='w-80 flex text-white gap-4'><input type="checkbox" name="check" id="checkT&C" /><span>I agree with all <a className='text-blue-200 underline cursor-pointer'>T&C</a></span></label>
          <button className='w-80 h-15 bg-indigo-500  shadow-lg shadow-indigo-500/50 active:scale-90  cursor-pointer text-white text-2xl rounded-xl'
            type="submit"
          >SUBMIT</button>
          <h3 className='text-white'>if not register,  <Link to='/' className='text-blue-200 cursor-pointer underline'>register here</Link></h3>
        </form>
      </div>
    </div>
  )
}

export default SignUp
