import React from 'react';
import { Link, Outlet, Navigate } from 'react-router-dom'; 
import { User, ShoppingCart, UserPlus,Briefcase, MessageCircle } from 'react-feather';

export default function Admin() {
  return (
    <div className="flex min-h-screen bg-[#FCF6EF]">
      <div
        className="w-56 flex flex-col pt-5 items-center"
        style={{ background: 'linear-gradient(286.17deg, #FF9500 0%, #FFC97E 92%)' }}
      >
        <div>
          <p className="font-bold text-xl">Admin Panel</p>
          <p className="text-xs opacity-70">Control Everything from here</p>
        </div>
        <div className="flex flex-col font-bold mt-6">
          <Link to="user" className="flex w-52 items-center space-x-6 group relative p-2">
            <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 rounded transition duration-300"></span>
            <User size={22} color="black" />
            <p className="text-xl z-10">User</p>
          </Link>
          <Link to="products" className="flex w-52 items-center space-x-6 group relative p-2 mt-3">
            <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 rounded transition duration-300"></span>
            <ShoppingCart className="stroke-4 text-black" size={22} />
            <p className="text-xl z-10">Products</p>
          </Link>
          <Link to="profile" className="flex w-52 items-center space-x-6 group relative p-2 mt-3">
            <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 rounded transition duration-300"></span>
            <Briefcase size={22} color="black" />
            <p className="text-xl z-10">Buisnesses</p>
          </Link>
          <Link to="chat" className="flex w-52 items-center space-x-6 group relative p-2 mt-3">
            <span className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 rounded transition duration-300"></span>
            <MessageCircle size={22} color="black" />
            <p className="text-xl z-10">Chat</p>
          </Link>
        </div>
      </div>

      <div className="flex-1 p-5">
        <Outlet /> 
     
      </div>
    </div>
  );
}
