import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [formData,setFormData] = useState({
        email:"",
        password:""
    });

    const ADMIN_CREDENTIALS = {
  email: "admin@gmail.com",
  password: "admin", // You can change it
};
      const [error, setError] = useState('');
    const navigate = useNavigate();


    const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const isAdmin =
    formData.email === ADMIN_CREDENTIALS.email &&
    formData.password === ADMIN_CREDENTIALS.password;

    if(isAdmin)
    {
      navigate("/admin");
    }
      else{
    axios.post('http://localhost:8080/login', formData)
      .then((res) => {
        const userData =res.data;
        const member= localStorage.setItem("user", JSON.stringify(res.data));
        navigate('/user', { state: res.data });
      })
      .catch((error) => {
        if (error.response?.status === 401) {
          setError('Invalid email or password');
        } else {
          setError('Something went wrong. Please try again.');
        }
      });
    }
  };



  return (
    <div   className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4">

       <form onSubmit={handleSubmit}
       className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-6" >


        <h2 className="text-2xl font-bold text-center text-gray-700">Welcome Back</h2>
        <p className="text-sm text-center text-gray-500 mb-4">Please log in to your account</p>


         {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded text-sm">{error}</div>
        )}


        
         <div>
          <label className="block mb-1 text-sm text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition duration-200"
        >
          Log In
        </button>

      
       </form>


    </div>
  )
}
