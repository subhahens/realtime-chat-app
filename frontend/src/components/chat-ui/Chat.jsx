import React, { useState } from 'react'
import Leftsection from '../left-section/LeftSection'
import RightSec from '../right-section/RightSec'
import NoChat from '../right-section/NoChat'
import { userdata } from '../../lib/dummy'

const Chat = () => {
  const [SelectedUser, setSelectedUser] = useState(false)
  {console.log(SelectedUser)}
  return (
    <div className='flex flex-row bg-gray-900'>
      <Leftsection setSelectedUser={setSelectedUser} />
      {SelectedUser ? <RightSec SelectedUser={SelectedUser}  /> : <NoChat /> }     
    </div>
  )
}

export default Chat
