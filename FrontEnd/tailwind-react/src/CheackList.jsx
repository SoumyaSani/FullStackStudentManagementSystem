import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const CheckList = () => {
  const [pendingUsers, setPendingUsers] = useState([]);


  const navigate =useNavigate();
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("pendingUsers")) || [];
    setPendingUsers(users);
  }, []);

  const handleApprove = (user, index) => {
    axios.post("http://localhost:8080/register", user)
      .then(() => {
        const updatedList = [...pendingUsers];
        updatedList.splice(index, 1);
        setPendingUsers(updatedList);
        localStorage.setItem("pendingUsers", JSON.stringify(updatedList));
      });
  };

  const handleCancel = (index) => {
    const updatedList = [...pendingUsers];
    updatedList.splice(index, 1);
    setPendingUsers(updatedList);
    localStorage.setItem("pendingUsers", JSON.stringify(updatedList));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Checklist: Pending Users</h2>
      {pendingUsers.length === 0 ? (
        <p className="text-gray-500">No pending users.</p>
      ) : (
        <ul className="space-y-4">
          {pendingUsers.map((user, index) => (
            <li
              key={index}
              className="p-4 border rounded-lg flex justify-between items-center"
            >
              <div>
                <p><strong>First Name:</strong> {user.firstName}</p>
                <p><strong>Last Name:</strong> {user.lastName}</p>
                <p><strong>Email:</strong> {user.email}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleApprove(user, index)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  ✅
                </button>
                <button
                  onClick={() => handleCancel(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}


      
    </div>
  );
};

export default CheckList;
