import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  

  const handleLogout = () => {
    // Optional: clear auth/token
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo / Title */}
        <div className="text-xl font-bold text-white">
          Admin Panel
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex">

          <Link to="/admin"  className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-1 rounded">
            Dashboard
          </Link>
          <Link to="/admin/register"  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">
            Register User
          </Link>
          <Link to="/admin/checklist" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded">
            Manage User
          </Link>
          
          <Link to="/admin/showData"  className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded">
            User Details
          </Link>
          
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
