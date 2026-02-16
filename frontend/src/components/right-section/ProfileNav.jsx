import React, { useContext } from 'react'
import defIMG from '../../assests/DefaultIMG.jpg'
import { EllipsisVertical, SendHorizontal, Plus } from 'lucide-react'
import { AuthContext } from '../../../context/AuthContext'
import { MsgContext } from '../../../context/MsgContext'
const ProfileNav = ({user}) => {
    const {selectedUser} = useContext(MsgContext);
    const {OnlineUser} = useContext(AuthContext);
    return (
        <div className='h-18 bg-gray-950 text-white flex items-center justify-between pr-10 pl-10'>
            <div className='flex flex-row gap-5 cursor-pointer'>
                <img src={false || defIMG} className='w-15 h-15 rounded-full bg-amber-400' alt="" />
                <div className='h-12 '>
                    <h2 className='font-bold'>{user.Name}</h2>
                    <h3>{OnlineUser.includes(selectedUser._id) ? "online" : "offline"}</h3>
                </div>
            </div>
            <div className='hover:bg-indigo-600 w-8 h-8 rounded-full flex justify-center items-center'>
                <EllipsisVertical color='white' className='cursor-pointer' />
            </div>
        </div>
    )
}

export default ProfileNav
