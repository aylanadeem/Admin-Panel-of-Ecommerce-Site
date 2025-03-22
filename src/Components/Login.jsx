import React, { useState } from 'react'; 
import { Mail, Lock, Eye, EyeOff } from 'react-feather'; 

export default function Login({ onLogin }) { 
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [showPassword, setShowPassword] = useState(false); 

    const handleLogin = () => { 
        if (!email || !password) { 
            alert('Please fill in all fields'); 
        } else { 
            onLogin(); 
        } 
    }; 

    return ( 
        <div className="bg-gradient-to-b from-white to-[#FFC97E] flex space-x-56 items-center justify-center min-h-screen"> 
            <div> 
                <img className="h-48 -mt-10 ml-20" src="public/pics/newlogo.svg" alt="" /> 
            </div> 
            <div> 
                <div className="relative w-full max-w-sm ml-5 -mt-5"> 
                    <Mail 
                        size={16} 
                        className="absolute text-gray-500 left-3 top-2/4 transform -translate-y-1/2" 
                    /> 
                    <input 
                        type="text" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="pl-10 placeholder:text-sm placeholder:-mt-10 pr-4 py-2 w-72 border border-none rounded-xl focus:outline-orange-500 focus:ring-2 focus:border-orange-500" 
                    /> 
                </div> 

                <div className="relative w-full max-w-sm ml-5 mt-5"> 
                    <Lock 
                        size={16} 
                        className="absolute text-gray-500 left-3 top-2/4 transform -translate-y-1/2" 
                    /> 
                    <input 
                        type={showPassword ? 'text' : 'password'} 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        className="pl-10 pr-10 placeholder:text-sm placeholder:-mt-10 py-2 w-72 border border-none rounded-xl focus:outline-orange-500 focus:ring-2 focus:border-orange-500" 
                    /> 
                    <button 
                        type="button" 
                        onClick={() => setShowPassword(!showPassword)} 
                        className="absolute -ml-10 top-2/4 transform -translate-y-1/2 text-gray-500" 
                    > 
                        {showPassword ? <EyeOff size={14} /> : <Eye size={16} />} 
                    </button> 
                </div> 

                <button 
                    onClick={handleLogin} 
                    className="w-72 ml-6 text-white py-2 px-4 mt-7 rounded-xl" 
                    style={{ 
                        background: 'linear-gradient(286.17deg, #FF9500 0%, #FFC97E 92%)', 
                    }} 
                > 
                    Log in 
                </button> 
            </div> 
        </div> 
    ); 
}
