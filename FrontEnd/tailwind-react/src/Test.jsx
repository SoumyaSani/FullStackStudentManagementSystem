import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const HOBBIES_API = "http://localhost:8080/hobbies"; 



  


function Test() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    qualification: "",
    course: "",
    hobbies: [],
    about:""
   
  });

   const [hobbies, setHobbies] = useState([]);

   const [qualifications, setQualifications] = useState([]);
   const [qualification,setQualification] = useState('');


   const [pgcourses, setPgcourses] = useState([]);
   const [ugcourses, setUgcourses] = useState([]);
  


    

   
   

 // const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/hobbies')
      .then(response => {
        setHobbies(response.data);
      })
      .catch(error => {
        console.error('Error fetching hobbies:', error);
      });
  }, []);

  

   useEffect(() => {
    axios.get('http://localhost:8080/qualification')
      .then(response => {
        setQualifications(response.data);
      })
      .catch(error => {
        console.error('Error fetching qualification:', error);
      });
  }, []);

 
  useEffect(() => {
    axios.get(' http://localhost:8080/pg')
      .then(response => {
        setPgcourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching qualification:', error);
      });
  }, []);

  
  useEffect(() => {
    axios.get(' http://localhost:8080/ug')
      .then(response => {
        setUgcourses(response.data);
      })
      .catch(error => {
        console.error('Error fetching qualification:', error);
      });
  }, []);
  

const handleChangeForQulification =(e) =>
{
   setQualification(e.target.value);
   formData.qualification.includes(qualification);
   
}

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const hobbies = checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((hobby) => hobby !== value);
        return { ...prev, hobbies };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/result", { state: formData
      
     });
  };

 // const courses = formData.qualification === "UG" ? UG_COURSES : PG_COURSES;
 

  return (
   <div   className="flex items-center justify-center min-h-screen bg bg-gray-500">

     <form onSubmit={handleSubmit} className="w-full rounded-xs max-w-md h-full bg-gray-100 p-8 pb-12 ">


      <h2 className="text-4xl  font-normal font-roboto text-center mb-4">Register</h2>        
      <p className=" text-sm text-gray-400 text-center font-roboto font-normal pb-5 ">Create your account. It's free and only takes a minute</p>

       <div className=" flex mb-8  space-x-4" >
      
        <input name="firstName" 
        placeholder=" First Name"
        className="w-full  h-8 border border-gray-300 rounded-xs bg-white  field-sizing-content"
        value={formData.firstName} onChange={handleChange} required />
      
      

      
        <input name="lastName"
         placeholder=" Last Name"
         className="w-full  h-8 border border-gray-300 rounded-xs bg-white  field-sizing-content"
         value={formData.lastName} onChange={handleChange} required />
      
      </div>

      
      <div  className="mb-8 flex">
        <input name="email" type="email"
          placeholder=" Email"
          className="w-full border border-gray-300 h-8 rounded-xs bg-white  field-sizing-content"
          value={formData.email} onChange={handleChange} required />
     </div>
    

      <div  className="mb-8 flex">
        <input name="age" type="number"
          placeholder=" Age"
          className="w-full border border-gray-300 h-8 rounded-xs bg-white  field-sizing-content"
          value={formData.age} onChange={handleChange} required />
     </div>

      <label className='text-gray-500'>
        Qualification:
        <select className="border rounded-sm"  name="qualification" value={qualification} onChange={handleChangeForQulification} required>
          
                <option value="">-- Select --</option>
                 {qualifications.map((qlf, index) => (
                <option key={index} value={qlf}>
                 {qlf}
               </option>
                ))}
            </select>
       
      </label>
      <br />

      {qualification == "PG" && (
        <div className="space-y-2">
          <p className="text-gray-500">Select Course:</p>
          
          {pgcourses.map((course) => (
            <label key={course}  className="flex items-center space-x-2">
              <input
                type="radio"
                name="course"
                value={course}
                checked={formData.course === course}
                onChange={handleChange}
              />
              {course}
            </label>
          ))}
        </div>
      )}
      {qualification == "UG" && (
        <div className="space-y-2">
          <p className="text-gray-500">Select Course:</p>
          
          {ugcourses.map((course) => (
            <label key={course}  className="flex items-center space-x-2">
              <input
                type="radio"
                name="course"
                value={course}
                checked={formData.course === course}
                onChange={handleChange}
              />
              {course}
            </label>
          ))}
        </div>
      )}

      <div>
        <p className="text-gray-500"> Hobbies:</p>
        <div className=" space-x-2.5 mb-4">
          {hobbies.map((hobby) => (
          <label key={hobby} >
            <input
              type="checkbox"
              name="hobbies"
              value={hobby}
              checked={formData.hobbies.includes(hobby)}
              onChange={handleChange}
            />
            {hobby}
          </label>
        ))}
        </div>
      </div>
<div className="mb-8">
                 <textarea type="text"
                    value={formData.about}
                     onChange={handleChange}
                      name="about"
                      required
                       placeholder=" About Me"
                        className="w-full border border-gray-300 h-8  rounded-xs bg-white  field-sizing-content"/>
               </div>



                 <div className="mb-8 flex">
                    
                    <input type="password"
                    value={formData.password}
                     onChange={handleChange}
                      name="password"
                      required
                       placeholder=" Password"
                        className="w-full border border-gray-300 h-8  rounded-xs bg-white  field-sizing-content"/>
                   
                </div>
                 <div className="mb-3 flex">
                   
                    <input type="password" name="confirmPassword"
                    value={formData.confirmPassword}
                    required
                     onChange={handleChange} 
                    placeholder=" Confirm Password"
                     className="w-full border  border-gray-300 rounded-xs h-8 bg-white  field-sizing-content"/>
                   
                </div>

            {/* <div className="flex mb-3 ">
             
            <input type='checkbox' name='checkbox' required checked={formData.checkbox} onChange={handleChange} />
           <p className="text-sm flex"> <p className="text-gray-400 pl-1">I accept the</p><p className="text-green-400">Terms of Use </p> <span className="text-gray-400 pl-1"> & </span><p className="text-green-400 pl-1"> Privacy Policy</p></p>
              
            </div> */}
            
       

                

                <button type="submit" className="justify-center w-96 h-8 bg-green-600 text-white rounded-xs 
                 field-sizing-content hover:bg-green-800">
                    Register Now
                </button>

    </form>
   </div>
  );
}

export default Test;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Dropdown = () => {
//   const [courses, setCourses] = useState([]);
//   const [selected, setSelected] = useState("");

//   useEffect(() => {
//     axios.get("http://localhost:8080/api/ug-courses") // Replace with your endpoint
//       .then(res => {
//         setCourses(res.data);
//       })
//       .catch(err => {
//         console.error("Error fetching courses:", err);
//       });
//   }, []);

//   return (
//     <div>
//       <label>Select Course:</label>
//       <select value={selected} onChange={e => setSelected(e.target.value)}>
//         <option value="">-- Select --</option>
//         {courses.map((course, index) => (
//           <option key={index} value={course}>
//             {course}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Dropdown;
