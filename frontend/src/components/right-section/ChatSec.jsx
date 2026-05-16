import React, { useContext, useEffect, useRef } from 'react'
import { formatTime } from '../../lib/utils'
import { MsgContext } from '../../../context/MsgContext.jsx';
import { AuthContext } from '../../../context/AuthContext.jsx';

const ChatSec = () => {
    const { messages, selectedUser, setSelectedUser } = useContext(MsgContext);
    const { AuthUser, OnlineUser } = useContext(AuthContext);
    const scrollEnd = useRef();
    useEffect(() => {
        if (scrollEnd.current && messages) {
            scrollEnd.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages])
    return (
        <div className='bg-gray-900 h-110 p-5 text-red-50 flex flex-col overflow-y-scroll'>
            {messages?.map((msg, index) => (
                <div
                    key={index}
                    className={`w-full flex ${msg.senderId === AuthUser._id && 'flex-row-reverse'
                        }`}
                >
                    <div className='flex flex-col'>
                        <div className='mx-10'>
                            {msg.image ? (
                                <img
                                    src={msg.image}
                                    alt="sent-img"
                                    className="max-w-50 rounded-xl border border-black-700"
                                />
                            ) : (
                                <p className='min-w-50 max-h-25 border rounded-xl p-3 border-black bg-green-700'>
                                    {msg.text}
                                </p>
                            )}
                        </div>

                        <p className='mx-10 text-gray-400'>
                            {formatTime(msg.createdAt)}
                        </p>

                    </div>
                </div>
            ))}
            <div ref={scrollEnd}></div>
        </div>
    )
}

export default ChatSec;
