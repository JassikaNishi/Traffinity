import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signoutSuccess } from '../redux/user/userSlice';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(""); 

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSignout = () => {
    dispatch(signoutSuccess());
    navigate('/login');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Tips And Resources", path: "/tips" },
    { link: "Dashboard", path: "/dashboard" },
    { link: "Analytics", path: "/analytics" },
    { link: "About Us", path: "/aboutus" },
    { link: "Contact Us", path: "/contact-page" },
  ];

  return (
    <header
      className={`w-full fixed top-0 left-0 right-0 transition-all duration-300 ease-in-all ${isSticky ? "bg-[rgb(107, 72, 122)]" : "bg-transparent"}`}
    >
      <div
        className={`flex items-center justify-between py-3 px-6 shadow-md ${isSticky ? "bg-[rgb(106, 75, 134)]" : "bg-transparent"}`}
      >
        <h1 className="text-3xl font-bold text-[rgb(137,190,236)]">
          SehatKal.co
        </h1>

        <nav className="hidden lg:flex space-x-12">
          <ul className="flex items-center space-x-12">
            {navItems.map(({ link, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={() => setActiveTab(path)} 
                  className={`text-base text-black uppercase cursor-pointer hover:text-blue-300 ${activeTab === path ? "text-blue-500 font-bold" : ""}`}
                >
                  {link}
                </Link>
              </li>
            ))}

            {currentUser ? (
              <div className="relative">
                <button onClick={toggleDropdown} className="flex items-center space-x-2">
                  <img
                    src={currentUser.profilePicture}
                    alt="user-avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-base text-black">{currentUser.username}</span>
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg w-72 p-2">
                    <div className="py-1 px-2 text-sm text-black">
                      <p>{currentUser.username}</p>
                      <p className="text-gray-500">{currentUser.email}</p>
                    </div>
                    <Link to="/profile" className="block px-2 py-1 text-black hover:bg-gray-100">Profile</Link>
                    <button
                      onClick={handleSignout}
                      className="block px-2 py-1 text-black hover:bg-gray-100 w-full text-left"
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <button className="text-white py-2 px-4 border border-gray-300 rounded-md bg-[#0A3981] hover:bg-[#5b89cd]">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="text-white py-2 px-4 border border-gray-300 rounded-md bg-[#0A3981] hover:bg-[#5b89cd]">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </ul>
        </nav>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isMenuOpen ? <span>&#x2715;</span> : <span>&#9776;</span>}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="space-y-4 mt-12 py-7 text-white bg-blue-300 md:hidden">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setActiveTab(path)}
              className={`block text-base text-white uppercase cursor-pointer hover:text-blue-300 ${activeTab === path ? "text-blue-500 font-bold" : ""}`}
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
