import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';  

export default function NewChat() {
  const location = useLocation(); 
  const activeChat = location.state;  
  const navigate = useNavigate();  

  return (
    <div className="min-h-screen bg-white p-4 rounded-lg relative">
      <button
        onClick={() => navigate(-1)}  
        className="absolute top-4 left-4 p-2"
      >
                <img  src="public/pics/arrowbtn.svg" alt="" /> 
                </button>

      {activeChat && (
        <>
          <div className="flex items-center justify-end mb-4 mt-16">
            <div className="flex flex-col items-end max-w-[70%]">
              <p className="bg-Colors-Orange text-white p-5 rounded-l-full rounded-tr-full">
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore..`}
              </p>
              <span className="mt-1 text-xs text-gray-500">10:30 AM</span>
            </div>
            <img
              src={activeChat.profileImg}  
              alt="Profile"
              className="w-12 h-12 rounded-full ml-4"
            />
          </div>

          <div className="flex items-center justify-start mb-4">
            <img
              src="/pics/user.svg"
              alt="User"
              className="w-12 h-12 mr-4"  
            />
            <div className="flex flex-col items-start max-w-[70%]">
              <p className="bg-Colors-Yellow text-white p-5 rounded-r-full rounded-tl-full">
                {`Sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui.`}
              </p>
              <span className="mt-1 text-xs text-gray-500">10:32 AM</span>
            </div>
          </div>

          <div className="flex items-center justify-end mb-4">
            <div className="flex flex-col items-end max-w-[70%]">
              <p className="bg-Colors-Orange text-white p-5 rounded-l-full rounded-tr-full">
                {`Lorem ipsum dolor sit  `}
              </p>
              <span className="mt-1 text-xs text-gray-500">10:45 AM</span>
            </div>
            <img
              src={activeChat.profileImg}  
              alt="Profile"
              className="w-12 h-12 rounded-full ml-4"
            />
          </div>

          <div className="flex items-center justify-start mb-4">
            <img
              src="/pics/user.svg"
              alt="User"
              className="w-12 h-12 mr-4"  
            />
            <div className="flex flex-col items-start max-w-[70%]">
              <p className="bg-Colors-Yellow text-white p-5 rounded-r-full rounded-tl-full">
                {`Sed do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim veniam.`}
              </p>
              <span className="mt-1 text-xs text-gray-500">10:50 AM</span>
            </div>
          </div>

          <div className="flex items-center justify-end mb-4">
            <div className="flex flex-col items-end max-w-[70%]">
              <p className="bg-Colors-Orange text-white p-5 rounded-l-full rounded-tr-full">
                {`Lorem ipsum dolor sit amet, consectetur adipiscing.`}
              </p>
              <span className="mt-1 text-xs text-gray-500">10:55 AM</span>
            </div>
            <img
              src={activeChat.profileImg} 
              alt="Profile"
              className="w-12 h-12 rounded-full ml-4"
            />
          </div>

          <div className="flex items-center justify-start mb-4">
            <img
              src="/pics/user.svg"
              alt="User"
              className="w-12 h-12 mr-4"  
            />
            <div className="flex flex-col items-start max-w-[70%]">
              <p className="bg-Colors-Yellow text-white p-5 rounded-r-full rounded-tl-full">
                {`Sed do eiusmod tempor incididunt ut labore et.`}
              </p>
              <span className="mt-1 text-xs text-gray-500">10:58 AM</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
