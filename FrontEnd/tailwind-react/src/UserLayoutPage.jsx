import React from "react";
import { Outlet } from "react-router-dom";
import NavBarUser from "./NavBarUser"; // assuming same folder or adjust path

const UserLayoutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <NavBarUser />
      <div className="p-6">
        <Outlet /> {/* This is where nested admin pages load */}
      </div>
    </div>
  );
};

export default UserLayoutPage;
