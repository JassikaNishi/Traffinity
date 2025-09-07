import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import AboutUS from './Components/AboutUS';
import ContactPage from './Components/ContactPage';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import TipsAndResources from './Components/TipsandResources';
import ProfilePage from './Components/ProfilePage';
import Analytics from './Components/Analytics';
import Dashboard from './Components/Dashboard';
import HomePage from './Components/Homepage';  
import Chatbot from './Components/Chatbot';
import Sidebar from './Components/Sidebar';  
import './index.css';

const App = () => {
  return (
    <Router>
      <Header />

      <div className="flex">
        <Sidebar />  

        <div className="flex-1 mt-24 p-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/aboutus" element={<AboutUS />} />
            <Route path="/contact-page" element={<ContactPage />} />
            <Route path="/tips" element={<TipsAndResources />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>

      <Chatbot />
    </Router>
  );
};

export default App;
