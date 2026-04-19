import React, { useContext, useEffect, useState } from 'react'
import { EllipsisVertical, SendHorizontal, Plus } from 'lucide-react'
import { MsgContext } from '../../../context/MsgContext';
import { AuthContext } from '../../../context/AuthContext';
import toast from 'react-hot-toast';

const InputSec = () => {
  const { selectedUser, sendMsg, getMessages } = useContext(MsgContext);
  const { OnlineUser } = useContext(AuthContext);
  const [Input, setInput] = useState("");

  const handleSendMsg = async (e) => {
    e.preventDefault();
    if (Input.trim() === "") return;
    await sendMsg({ text: Input.trim() });
    setInput("");
  };

  const handleSendImage = async (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) {
      toast.error("select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
      await sendMsg({ image: reader.result });
      e.target.value = "";
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    if (selectedUser?._id) {
      getMessages(selectedUser._id);
    }
  }, [selectedUser]);

  return (
    <div className='bg-gray-900 w-full h-20 flex flex-row justify-center items-center gap-10'>
      
      <input 
        type="file" 
        name="image" 
        accept="image/png, image/jpeg" 
        id="image" 
        hidden 
        onChange={handleSendImage}
      />

      <label htmlFor="image" className='w-12 h-12 bg-gray-800 flex justify-center items-center rounded-full cursor-pointer'>
        <Plus color='white' />
      </label>

      <input 
        onChange={(e) => setInput(e.target.value)} 
        onKeyDown={(e) => e.key === "Enter" ? handleSendMsg(e) : null} 
        value={Input} 
        className='w-160 h-12 bg-gray-800 text-white text-2xl rounded-full shadow appearance-none border py-2 px-5 overflow-x-auto leading-tight focus:border-3 focus:border-sky-500 focus:outline-none'
        type="text" 
        placeholder='write here ...' 
      />

      <button 
        onClick={handleSendMsg} 
        className='w-12 h-12 bg-gray-800 flex justify-center items-center rounded-full cursor-pointer'
      >
        <SendHorizontal color='white' />
      </button>
    </div>
  )
}

export default InputSec;