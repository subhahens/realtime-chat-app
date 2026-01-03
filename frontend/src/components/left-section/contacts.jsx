import React from 'react'

const Contacts = (props) => {
    return (
        <div className='bg-gray-900 border text-white border-gray-500 p-3 gap-4 w-full h-20 flex flex-row justify-between items-center'>
            <div className='h-full gap-4 flex flex-row items-center justify-center'>
                <div className='w-15 h-15 rounded-full bg-amber-400'></div>
                <div>
                    <h2 className='font-bold' >{props.name}</h2>
                    <h3>{props.tag}</h3>
                </div>
            </div>
            <span className='h-full gap-1 flex flex-row items-center'>
                <div className='w-1.5 h-1.5 rounded-full  bg-green-700'></div>
                <p>{props.isOnline ? "online" : "offline"}</p>
            </span>
        </div>
    )
}

export default Contacts
