import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  {/*----usestate declare-----*/}
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [cnfpass, setCnfpass] = useState('');
  const [isSubmiting, setIsSubmiting] = useState(false);

  {/*----all functions-----*/}
  const validity = (e) => {
    e.preventDefault();
    setIsSubmiting(true);
    /*declare all query selector*/
    const ErrorName = document.querySelector("#err-name");
    const ErrorEmail = document.querySelector("#err-email");
    const Errorpass = document.querySelector("#err-pass");
    const ErrorCnfpass = document.querySelector("#err-cnf-pass");
    ErrorName.innerHTML,ErrorEmail.innerHTML,Errorpass.innerHTML,ErrorCnfpass.innerHTML = '';
    if (Name.length < 3) {
      ErrorName.innerHTML = "name should greater then 3";
      setIsSubmiting(false);
      return;
    }else if(email.length < 10) {
      ErrorEmail.innerHTML = "name should greater then 3";
      setIsSubmiting(false);
      return;
    }
    return;
  }
  const check = (e) => {
    e.preventDefault();
    console.log("check pass");

  }
  {/*-----web ui here------*/}
  return (
    <div>
      <div className='w-full h-screen  bg-linear-45 from-pink-600 to-indigo-500 flex m-0 p-0 items-center justify-center animated-bg'>
        <form className='w-100 h-140 bg-gray-700 rounded-xl flex items-center justify-center gap-5 flex-col border-2 border-gray-700  bg-blur-xl '
          onSubmit={(e) => {
            validity(e);
          }
          }
        >
          <h2 className='text-5xl text-white shadow-4xl'>USER SIGN UP</h2>
          <div>
            <input type="text" onChange={(elem)=>{
              setName(elem.target.value);
              
            }} className='w-80 h-12 bg-amber-50 text-2xl rounded-2xl shadow appearance-none border py-2 px-3 text-gray-700 leading-tight  focus:border-sky-500 focus:outline-none focus:shadow-outline-sky-500' placeholder='Full Name' name="name" id="user" />
            <p id="err-name"className='w-80 flex text-red-400 gap-4'></p>
          </div>
          <div>
            <input type="gmail" onChange={(elem)=>{
              setEmail(elem.target.value)
            }} className='w-80 h-12 bg-amber-50 text-2xl rounded-2xl shadow appearance-none border py-2 px-3 text-gray-700 leading-tight  focus:border-sky-500 focus:outline-none focus:shadow-outline-sky-500' placeholder='name@xyz.com' name="email" id="email" />
            <p id="err-email" className='w-80 flex text-red-400 gap-4'></p>
          </div>
          <div>
            <input type="password" onChange={(elem)=>{
              setPass(elem.target.value);
            }} className='w-80 h-12 bg-amber-50 text-2xl rounded-2xl shadow appearance-none border py-2 px-3 text-gray-700 leading-tight  focus:border-sky-500 focus:outline-none focus:shadow-outline-sky-500' placeholder='password' name="password" id="pass" />
            <p id="err-pass" className='w-80 flex text-red-400 gap-4'></p>
          </div>
          <div>
            <input type="password" onChange={(elem)=>{
              setCnfpass(elem.target.value);
            }} className='w-80 h-12 bg-amber-50 text-2xl rounded-2xl shadow appearance-none border py-2 px-3 text-gray-700 leading-tight  focus:border-sky-500 focus:outline-none focus:shadow-outline-sky-500' placeholder='confirm password' name="cnfpassword" id="cnfpass" />
            <p id="err-cnf-pass" className='w-80 flex text-red-400 gap-4'></p>
          </div>
          <label className='w-80 flex text-white gap-4'><input type="checkbox" name="check" id="checkT&C" /><span>I agree with all <a className='text-blue-200 underline cursor-pointer'>T&C</a></span></label>
          <button disabled={isSubmiting} className='w-80 h-15 bg-indigo-500  shadow-lg shadow-indigo-500/50 active:scale-90  cursor-pointer text-white text-2xl rounded-xl'
            type="submit"
          >{isSubmiting?"loading...":"Sign Up"}</button>
          <h3 className='text-white'>already register,  <Link to='/' className='text-blue-200 cursor-pointer underline'>login</Link></h3>
        </form>
      </div>
    </div>
  )
}

export default SignUp
