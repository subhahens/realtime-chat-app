import React from 'react'
import { useNavigate } from 'react-router-dom'
const MyProfile = (props) => {
    const navigate = useNavigate();
    return (
        <div className='w-full h-screen bg-gray-800 flex justify-center items-center'>
            <div className='bg-gray-900 border rounded-xl  text-white border-gray-500 p-3 gap-15 w-180 h-120 flex flex-col justify-between items-center'>
                <div className='h-full gap-20 flex flex-row items-center justify-center'>
                    <div className='w-40 h-40 rounded-full bg-amber-400'></div>
                    <div className='gap-15'>
                        <h2 className='font-bold text-3xl' >full Name</h2>
                        <h3 className='text-2xl'>hello guys welcome to my web site</h3>
                    </div>
                </div>
                <span className='h-full gap-1 flex flex-row items-center'>
                    <div className='w-1.5 h-1.5 rounded-full  bg-green-700'></div>
                    <p>{props.isOnline ? "online" : "offline"}</p>
                </span>
                <button onClick={()=>{
                    navigate('/chat');
                }} className='bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer focus:ring-offset-2 transition-all duration-200'>back</button>
            </div>
        </div>
    )
}

export default MyProfile
