import React from 'react'
import { EllipsisVertical, SendHorizontal, Plus } from 'lucide-react'

const InputSec = () => {
  return (
    <form className='bg-gray-900 w-full h-20 flex flex-row justify-center items-center gap-10'>
      <input type="file" name="image" id="image" hidden />
      <label htmlFor="image" className='w-12 h-12 bg-gray-800 flex justify-center items-center rounded-full cursor-pointer'><Plus color='white' /></label>
      <input className='w-160 h-12 bg-gray-800  text-white text-2xl rounded-full shadow appearance-none border py-2 px-5 overflow-x-auto leading-tight focus:border-3  focus:border-sky-500 focus:outline-none focus:shadow-outline-sky-500' type="text" placeholder='write here ...' name="chat" id="chat" />
      <button type='submit' className='w-12 h-12 bg-gray-800 flex justify-center items-center rounded-full cursor-pointer'><SendHorizontal color='white' /></button>
    </form>
  )
}

export default InputSec
