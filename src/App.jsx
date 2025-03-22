import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Admin from './Components/Admin';
import User from './Components/User';
import Products from './Components/Products';
import Profile from './Components/Profile';
import Chat from './Components/Chat';
import ProductDetails from './Components/ProductDetails';
import ChatScreen from './Components/ChatScreen';
import NewChat from './Components/NewChat';
import MessageBox from './Components/MessageBox';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Admin />}>
          <Route index element={<Navigate to="user" />} /> 
          <Route path="user" element={<User />} />
          <Route path="products" element={<Products />} />
          <Route path="profile" element={<Profile />} />
          <Route path="chat" element={<ChatScreen />} />
          <Route path="product-details" element={<ProductDetails />} />
          <Route path="/NewChat" element={<NewChat />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
