import React from 'react'
import {EllipsisVertical,SendHorizontal,Plus} from 'lucide-react'
const RightSec = () => {
  return (
    <div className='w-full h-screen bg-gray-900'>
        {/*profile detailed*/}
      <div className='h-18 bg-gray-950 text-white flex items-center justify-between pr-10 pl-10'>
        <div className='flex flex-row gap-5 cursor-pointer'>
            <div className='w-12 h-12 bg-amber-300 rounded-full'></div>
            <div className='h-12 '>
                <h2 className='font-bold'>Name</h2>
                <h3>Status</h3>
            </div>
        </div>
        <div className='hover:bg-indigo-600 w-8 h-8 rounded-full flex justify-center items-center'>
            <EllipsisVertical color='white' className='cursor-pointer' />
        </div>
      </div>
      {/*chat section*/}
      <div className='bg-amber-800 h-110'>

      </div>
      {/*input section*/}
        <div className='bg-gray-900 w-full h-20 flex flex-row justify-center items-center gap-10'>
            <button className='w-12 h-12 bg-gray-800 flex justify-center items-center rounded-full cursor-pointer'><Plus color='white'/></button>
            <input className='w-160 h-12 bg-gray-800  text-white text-2xl rounded-xl shadow appearance-none border py-2 px-3 leading-tight focus:border-3  focus:border-sky-500 focus:outline-none focus:shadow-outline-sky-500' type="text" placeholder='write here ...' name="chat" id="chat" />
            <button className='w-12 h-12 bg-gray-800 flex justify-center items-center rounded-full cursor-pointer'><SendHorizontal color='white'/></button>
        </div>
    </div>
  )
}

export default RightSec
