import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle } from 'react-feather';

function ChatUserData({ name, lastMessage, lastMessageTime, onChatClick }) {
  return (
    <div
      className="grid grid-cols-4 gap-x-8 mt-3 bg-[#F9FAFB] text-[#6B7280] h-12 items-center px-6  "
      
    >
      <div className="truncate">{name}</div>
      <div className="truncate">{lastMessage}</div>
      <div className="truncate">{lastMessageTime}</div>
    </div>
  );
}

export default function Chat() {
  const navigate = useNavigate();

  const chatUsers = [
    {
      name: 'John Doe',
      lastMessage: 'Hey, how are you?',
      lastMessageTime: '2024-11-18 14:30',
    },
    {
      name: 'Jane Smith',
      lastMessage: 'Got the project details, thanks!',
      lastMessageTime: '2024-11-18 15:00',
    },
    {
      name: 'Alice Johnson',
      lastMessage: 'Let’s catch up later.',
      lastMessageTime: '2024-11-17 18:30',
    },
    {
      name: 'Bob Brown',
      lastMessage: 'Can we reschedule the meeting?',
      lastMessageTime: '2024-11-16 10:45',
    },
  ];

  const handleChatClick = (name) => {
    navigate(`/chat/${name}`);
  };

  const handleChatButtonClick = () => {
    navigate(`/chat/new`);
  };

  return (
    <div className="min-h-screen bg-white pl-10 pt-5">
      <h1 className="font-bold text-xl mb-4 flex items-center">
        <MessageCircle size={24} className="mr-2 text-gray-600" />
        Recent Chats
      </h1>

      <div className="grid grid-cols-4 gap-x-8 bg-[#F9FAFB] font-semibold text-[#0b0b0b] h-12 items-center px-6">
        <p className="truncate">Name</p>
        <p className="truncate">Last Message</p>
        <p className="truncate">Last Message Time</p>
      </div>

      {chatUsers.map((user, index) => (
        <ChatUserData
          key={index}
          name={user.name}
          lastMessage={user.lastMessage}
          lastMessageTime={user.lastMessageTime}
          onChatClick={handleChatClick}
        />
      ))}
      

      <button
        onClick={handleChatButtonClick}
        aria-label="Start a new chat"
      >
        <img
          src="/pics/chat.svg"
          alt="New Chat"
          className=' -mt-9 -ml-9 h-40 w-40'
        />
      </button>
    </div>
  );
}
