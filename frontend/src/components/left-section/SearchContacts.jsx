import React from 'react'
import { Search } from 'lucide-react'
const SearchContacts = () => {
  return (
    <div>
      <div className='bg-gray-900 gap-3 p-5 flex justify-center items-center border-b border-gray-600'>
        <input className='w-80 h-12 bg-gray-800  text-white text-2xl rounded-xl shadow appearance-none border py-2 px-3 leading-tight focus:border-3  focus:border-sky-500 focus:outline-none focus:shadow-outline-sky-500' type="text" name='search' placeholder='type contact...' />
        <button className='w-12 h-12 bg-gray-800 flex justify-center items-center rounded-full cursor-pointer' type="button"><Search color='white' /></button>
      </div>
    </div>
  )
}

export default SearchContacts
