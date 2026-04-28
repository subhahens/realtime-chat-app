import React, { useContext, useState } from 'react'
import Leftsection from '../left-section/LeftSection.jsx'
import RightSec from '../right-section/RightSec.jsx'
import NoChat from '../right-section/NoChat.jsx'
import { userdata } from '../../lib/dummy'
import { MsgContext } from '../../../context/MsgContext'

const Chat = () => {
  const {selectedUser,setSelectedUser} = useContext(MsgContext);
  return (
    <div className='flex flex-row bg-gray-900'>
      <Leftsection />
      {selectedUser ? <RightSec  /> : <NoChat /> }     
    </div>
  )
}

export default Chat
