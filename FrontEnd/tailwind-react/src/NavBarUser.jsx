import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const NavBarUser = () => {
  const navigate = useNavigate();

  const location = useLocation();
   const data = location.state;
   const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    // Optional: clear user session
    navigate("/");
  };



  return (
    <nav className="bg-purple-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* Logo or App Name */}
        <div className="text-2xl font-bold text-white">
          User Panel
        </div>



        {/* Navigation Links */}
        <div className="space-x-4 hidden md:flex">
          <Link to="/user" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded">
            Dashboard
          </Link>





          <Link to={`/user/register/${user.userId}`} className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded">
            Edit
          </Link>




          
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBarUser;
