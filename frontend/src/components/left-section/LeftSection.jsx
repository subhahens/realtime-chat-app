import React, { useContext, useEffect, useState } from 'react';
import Nav from './Nav.jsx';
import SearchContacts from './SearchContacts.jsx';
import Temp from './Temp.jsx';
import { MsgContext } from '../../../context/MsgContext.jsx';
import { AuthContext } from '../../../context/AuthContext.jsx';
const Leftsection = () => {
  const { users, selectedUser, getUsers,
    setSelectedUser, unseenmsg, setUnseenmsg, } = useContext(MsgContext);
  const { OnlineUser } = useContext(AuthContext);
  const [Input, setInput] = useState("");
  const filteredUsers = users.filter((user) =>
    user.Name.toLowerCase().includes(Input.toLowerCase())
  );
  useEffect(() => {
    try {
      getUsers();
    } catch (e) {
      console.error(e);
    }
  }, [OnlineUser]);
  return (
    <div className='bg-gray-800 w-2/6 h-screen'>
      <Nav />
      <SearchContacts Input={Input} setInput={setInput} />
      <div className='bg-gray-700 h-110 overflow-x-auto flex flex-col items-center gap-4'>
        <div className='w-full gap-10'>
          {filteredUsers.map((elem, idx) => {
            return <Contacts key={idx} onClick={() => setSelectedUser(elem)} name={elem.Name} tag={elem.tagline} img={elem.imgURL} isOnline={OnlineUser.includes(elem._id)} />;
          }
          )};
        </div>
        <p className='text-gray-400'>no more contacts here</p>
      </div>
    </div>
  )
}

export default Leftsection
