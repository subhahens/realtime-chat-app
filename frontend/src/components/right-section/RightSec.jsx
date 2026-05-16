import React, { useContext, useState } from 'react'
import { EllipsisVertical, SendHorizontal, Plus } from 'lucide-react'
import InputSec from './InputSec.jsx'
import ProfileNav from './ProfileNav.jsx'
import ChatSec from './ChatSec.jsx'
import { MsgContext } from '../../../context/MsgContext.jsx'
const RightSec = () => {
  const {selectedUser} = useContext(MsgContext);
  return (
    <div className='w-full h-screen bg-gray-900'>
      {/*profile detailed*/}
      <ProfileNav user={selectedUser}/>
      {/*chat section*/}
      <ChatSec />
      {/*input section*/}
      <InputSec />
    </div>
  )
}

export default RightSec
