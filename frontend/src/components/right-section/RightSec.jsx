import React from 'react'
import { EllipsisVertical, SendHorizontal, Plus } from 'lucide-react'
import InputSec from './InputSec'
import ProfileNav from './ProfileNav'
import ChatSec from './ChatSec'
const RightSec = ({SelectedUser}) => {
  return (
    <div className='w-full h-screen bg-gray-900'>
      {/*profile detailed*/}
      <ProfileNav user={SelectedUser}/>
      {/*chat section*/}
      <ChatSec />
      {/*input section*/}
      <InputSec />
    </div>
  )
}

export default RightSec
