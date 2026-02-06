import React from 'react'
import { messagesDummyData } from '../../lib/dummy'
import { formatTime } from '../../lib/utils'

const ChatSec = ({ SelectedUser, setSelectedUser }) => {
    return (
        <div className='bg-gray-900 h-110 text-red-50 flex flex-col-reverse overflow-y-scroll'>
            {messagesDummyData.map((msg, index) => (
                <div key={index} className={`w-full flex ${msg.senderId === 'user1' && 'flex-row-reverse'}`}>
                    <div className='flex flex-col'>
                        <p className='min-w-50 max-h-25 border mx-10 rounded-xl p-3 border-black bg-green-500 flex'>{msg.text}</p>
                        <p className='mx-10  text-gray-400'>{formatTime(msg.createdAt)}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChatSec
