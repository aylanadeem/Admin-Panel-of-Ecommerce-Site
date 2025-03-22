import React from 'react';
import { Outlet } from 'react-router-dom'; 
import ChatBox from './ChatBox';


const Admin = () => {
  return (
    <div className="min-h-screen bg-white">
      <header
        style={{
          background: 'linear-gradient(286.17deg, #FF9500 0%, #FFC97E 92%)',
        }}
        className="p-4 flex items-center justify-between rounded-b-3xl"
      >
        <div className="relative w-full"> 
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full h-10 pl-12 pr-12 placeholder:text-sm py-2 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-[black] placeholder:font-[GeneralSans] placeholder:text-gray-500"
            style={{ fontFamily: '"General Sans", sans-serif' }}
          />
          <img
            src="/pics/Group.svg"
            alt="Search"
            className="w-4 h-4 absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
          <img
            src="/pics/icon2.svg"
            alt="Icon1"
            className="w-4 h-4 absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
          />
        </div>
      </header>

      <div className="space-y-4 p-4 cursor-pointer">
        <ChatBox 
          profileImg="/pics/profile1.svg" 
          chatName="Metal Exchange" 
          messageCount="2" 
          message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <ChatBox 
          profileImg="/pics/profile2.svg" 
          chatName="Crypto Chat" 
          messageCount="2" 
          message="Vestibulum ante ipsum primis in faucibus orci luctus."
        />
        <ChatBox 
          profileImg="/pics/profile3.svg" 
          chatName="Stock Market" 
          messageCount="2" 
          message="Nullam hendrerit ante et malesuada."
        />
          <ChatBox 
          profileImg="/pics/profile1.svg" 
          chatName="Stock Market" 
          messageCount="2" 
          message="Nullam hendrerit ante et malesuada."
        />  <ChatBox 
        profileImg="/pics/profile6.svg" 
        chatName="Stock Market" 
        messageCount="2" 
        message="Nullam hendrerit ante et malesuada."
      />
        <ChatBox 
          profileImg="/pics/profile2.svg" 
          chatName="Stock Market" 
          messageCount="2" 
          message="Nullam hendrerit ante et malesuada."
        />
      </div>

      <div className="pl-10 pt-5">
        <Outlet /> 
      </div>
    </div>
  );
};

export default Admin;
