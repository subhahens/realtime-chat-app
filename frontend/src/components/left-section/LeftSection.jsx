import React from 'react';
import Nav from './nav.jsx';
import SearchContacts from './SearchContacts.jsx';
import Contacts from './contacts.jsx';
const Leftsection = () => {
  const userdata = [{
    imgURL: "url",
    Name: "subha hens",
    tagline: "no pain no gain",
    isOnline: true
  }, {
    imgURL: "url",
    Name: "ritu hens",
    tagline: " pain  gain",
    isOnline: true
  }
  ]
  return (
    <div className='bg-gray-800 w-2/6 h-screen'>
      <Nav />
      <SearchContacts />
      <div className='bg-gray-700 h-110 overflow-x-auto flex flex-col items-center gap-4'>
        <div className='w-full gap-10'>
          {userdata.map((elem) => {
            return <Contacts name={elem.Name} tag={elem.tagline} isOnline={elem.isOnline} />;
          }
          )};
        </div>
        <p className='text-gray-400'>no more contacts here</p>
      </div>
    </div>
  )
}

export default Leftsection
