import React from 'react';
import { useNavigate } from 'react-router-dom';


const ChatBox = ({ profileImg, chatName, messageCount, message }) => {
  const navigate = useNavigate();

  const handleClick = () => {
  
    navigate('/NewChat', {
      state: { profileImg, chatName, message, messageCount },
    });
  };

  return (
    <div
    className="flex items-center p-4 justify-center bg-white border-b border-b-gray-200 cursor-pointer"
    onClick={handleClick}
  >
      <img src={profileImg} alt={chatName} className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h1 className="font-semibold text-lg">{chatName}</h1>
        <p className="text-sm text-gray-500">{message}</p>
      </div>
      {messageCount && (
      <span className="ml-auto bg-[#FF9500] w-6 h-6 flex justify-center items-center text-white text-sm px-2 py-1 ">
      {messageCount}
    </span>
    
      )}
    </div>
  );
};

export default ChatBox;
