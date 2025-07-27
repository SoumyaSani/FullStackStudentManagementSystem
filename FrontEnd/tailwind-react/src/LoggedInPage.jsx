import {React,useState,useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function LoggedINPage() {
  const location = useLocation();
  const navigate = useNavigate();
  //const data = location.state;
  const data =  JSON.parse(localStorage.getItem("user")) || null;
 

  const showSuccessPopup = location.state?.showSuccessPopup || false;

const [popupVisible, setPopupVisible] = useState(showSuccessPopup);

useEffect(() => {
  if (popupVisible) {
    const timer = setTimeout(() => setPopupVisible(false), 1500);
    return () => clearTimeout(timer);
  }
}, [popupVisible]);





  return (

        <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center p-4">
          {popupVisible && (
  <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-bounce-in">
    ✅ Profile updated successfully!
  </div>
)}
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">
          👋 Hello, <span className="text-purple-500">{data.firstName || "User"}</span>!
          {console.log(data.firstName)}
        </h1>
        <p className="text-gray-600 mb-6">
          Welcome back to your dashboard.
        </p>
        <div className="flex justify-center">
          {data.profilePhotoBase64 && (
            <img
              src={data.profilePhotoBase64}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-purple-300"
            />
          )}
        </div>

          

       
       
      </div>
    </div>
  )
}
