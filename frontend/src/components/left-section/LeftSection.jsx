import React from 'react'
import {EllipsisVertical,Search} from 'lucide-react'

const Leftsection = () => {
  return (
    <div className='bg-amber-300 w-2/6 h-screen'>
      <nav className='bg-indigo-900 p-5 h-10 flex justify-end items-center '>
        <div className='hover:bg-indigo-600 w-8 h-8 rounded-full flex justify-center items-center'>
          <EllipsisVertical className='cursor-pointer'/>
        </div>
      </nav>
      <div className='bg-gray-900 gap-3 p-5 flex justify-center items-center '>
        <input className='w-80 h-12 bg-gray-500  text-white text-2xl rounded-xl shadow appearance-none border py-2 px-3 leading-tight focus:border-3  focus:border-sky-500 focus:outline-none focus:shadow-outline-sky-500' type="text" name='search' placeholder='type contact...' />
        <button className='w-12 h-12 bg-gray-500 flex justify-center items-center rounded-full cursor-pointer' type="button"><Search /></button>
      </div>
      <div className='bg-gray-700 h-screen flex justify-center'>
        <div className='bg-green-400 w-full h-20'>

        </div>
      </div>
    </div>
  )
}

export default Leftsection
