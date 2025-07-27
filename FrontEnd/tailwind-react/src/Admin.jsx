import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";


export default function Admin() {
  const navigate = useNavigate();

 
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
     
  

      {/* Welcome Section */}
      <div className="flex items-center justify-center h-[calc(100vh-80px)] px-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-700 mb-2">👋 Hi Admin</h2>
          <p className="text-gray-600">
            Manage your users and view their data from the dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}
