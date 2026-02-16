import React, { useContext, useState } from 'react'
import { EllipsisVertical, SendHorizontal, Plus } from 'lucide-react'
import InputSec from './InputSec'
import ProfileNav from './ProfileNav'
import ChatSec from './ChatSec'
import { MsgContext } from '../../../context/MsgContext'
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
