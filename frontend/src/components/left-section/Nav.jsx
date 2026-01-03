import {useState,React} from 'react'

import { EllipsisVertical,LogOut,CircleUserRound } from 'lucide-react'
const Nav = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-gray-950 p-5 h-10 flex justify-end items-center relative">

            {/* Icon */}
            <div onClick={() => { 
                setOpen(!open);
            }} className='hover:bg-indigo-600 w-8 h-8 rounded-full flex justify-center items-center'>
                <EllipsisVertical color='white' className='cursor-pointer' />
            </div>

            {/* Popup */}
            {open && (
                <div className="w-28 absolute top-12 right-5 text-white bg-gray-900 flex flex-col border border-gray-400 rounded-md overflow-hidden">
                    <span className="px-4 py-2 select-none hover:bg-gray-700 cursor-pointer border-b flex flex-row gap-2 border-gray-700">
                        <CircleUserRound />Profile
                    </span>
                    <span className="px-4 py-2 gap-2 select-none hover:bg-gray-700 flex flex-row cursor-pointer">
                        <LogOut />Logout
                    </span>
                </div>
            )}
        </nav>
    )
}

export default Nav