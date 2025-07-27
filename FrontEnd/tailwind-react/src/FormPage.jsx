import React, { useState,useEffect } from "react";
import {useParams, useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import Loading from "./Loading";
import { CheckCircle } from "lucide-react";

  //  const UG_COURSES = ["B.Tech", "B.Sc", "BCA"];
  //  const PG_COURSES = ["M.Tech", "M.Sc", "MCA"];
//const HOBBIES = ["Reading", "Traveling", "Gaming", "Music"];



function FormPage() {
  const [formData, setFormData] = useState(
    {
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    qualification: "",
    profilePhotoBase64:"",
    profilePhoto:"",
    course: "",
    hobbies: [],
    password:"",
    confirmPassword:"",
    about:""
   
  }
);

const location = useLocation();
 const redirectAfterUpdate = location.state?.redirectAfterUpdate ?? false;
 console.log(redirectAfterUpdate)




 const navigate = useNavigate();
  const { id } = useParams(); // user ID for editing (if present)

  const [loadingh, setLoadingh] = useState(false);
  
   const [loadingq, setLoadingq] = useState(true);
    const [loadingp, setLoadingp] = useState(true);
     const [loadingu, setLoadingu] = useState(true);
     const [loading, setLoading] = useState(false);

   //  const [profilePhoto, setProfilePhoto] = useState(null);



   const [hobbies, setHobbies] = useState([]);
   //const [editingUser, setEditingUser] = useState(null);
   const [showRegisterPopup, setShowRegisterPopup] = useState(false);


   //new

   const [qualifications, setQualifications] = useState([]);
      const [qualification,setQualification] = useState('');
   
   
      const [pgcourses, setPgcourses] = useState([]);
      const [ugcourses, setUgcourses] = useState([]);
   



   

 

useEffect(() => {
  if (id) {
    console.log("executed");
    axios.get(`http://localhost:8080/edit/${id}`)
      .then((res) => {
         if (res.data != null) {
          console.log(res.data);
  setFormData(prev => ({
    ...prev,
    ...res.data, // Merge server data

    
  }));
  
}
  })
      .catch((err) => {
        console.error("Error fetching user:", err);
        setFormData({});
      });
  }
}, [id]);

 

  useEffect(() => {
  setLoadingh(true); // Start loading

  setTimeout(() => {
    axios.get("http://localhost:8080/hobbies")
      .then((response) => {
      setHobbies(response.data); // or adjust based on your API
        setLoadingh(false); // End loading
      })
      .catch((err) => {
        console.error(err);
        setLoadingh(false); // Even on error, stop loading
      });
  }, 2000); // 2 second delay to simulate loading
}, []);
  

  

   useEffect(() => {
   setTimeout(() => {
    axios.get("http://localhost:8080/qualification")
      .then((response) => {
      setQualifications(response.data); // or adjust based on your API
        setLoadingq(false); // End loading
      })
      .catch((err) => {
        console.error(err);
        setLoadingq(false); // Even on error, stop loading
      });
  }, 2000);
  }, []);


  //new
  useEffect(() => {
   setTimeout(() => {
   axios.get(' http://localhost:8080/pg')
      .then((response) => {
       setPgcourses(response.data);
        setLoadingp(false); // End loading
      })
      .catch((err) => {
        console.error(err);
        setLoadingp(false); // Even on error, stop loading
      });
  }, 2000);
  }, []);
  

  
  useEffect(() => {
    axios.get(' http://localhost:8080/ug')
      .then(response => {
        setUgcourses(response.data);
        setLoadingu(false);
      })
      .catch(error => {
        console.error('Error fetching qualification:', error);
        setLoadingu(false);
      });
  }, []);

  const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result); // base64 string
    reader.onerror = error => reject(error);
  });
};


   
 

const handleChangeForQualification = (e) => {
  const value = e.target.value;
  setQualification(value);
  setFormData((prevData) => ({
    ...prevData,
    qualification: value,
  }));
};

  

  



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
  e.preventDefault(); // Prevent default form submission

  setLoading(true); // Start loading

  setTimeout(() => {
    if (id) {
      axios.put(`http://localhost:8080/edit/${id}`, formData)
        .then((res) => {
           
           if(redirectAfterUpdate)
           {
            navigate("/admin/showData",{state:{showUpdatePopup:true}});
       
           }
           else{
             localStorage.setItem("user", JSON.stringify(res.data));
            navigate("/user",{ state: { showSuccessPopup: true } });
           }
        })
        .catch((error) => {
          console.error("Error while updating:", error);
        })
        .finally(() => {
          setLoading(false); // Stop loading
        });
    } else {
      // axios.post("http://localhost:8080/register", formData)
      //   .then((res) => {
      //     navigate("/result", { state: res.data });
      //   })
      //   .catch((error) => {
      //     console.error("Error while registering:", error);
      //   })
      //   .finally(() => {
      //     setLoading(false); // Stop loading
      //   });
       const savedList = JSON.parse(localStorage.getItem("pendingUsers")) || [];
       savedList.push(formData);
        localStorage.setItem("pendingUsers", JSON.stringify(savedList));
      // navigate("/admin/result")
       setShowRegisterPopup(true); // Show popup first

         setFormData({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    qualification: "",
    profilePhotoBase64: "",
    course: "",
    hobbies: [],
    password: "",
    confirmPassword: "",
    about: ""
  });

        setTimeout(() => {
          setShowRegisterPopup(false); // Hide popup after 1.5 seconds
          navigate("/admin/register"); // Navigate after popup disappears
        }, 1500);
        setLoadingh(false);
        setLoading(false);




  
    }
  }, 2000); // Simulated 2-second delay
};


 

  //  if (loadingh) {
  //   return <p>Loading  Hobbies ...</p>;
  //  }

 
   

 // const courses = formData.qualification === "UG" ? UG_COURSES : PG_COURSES;
 

  return (
    
   <div   className="      min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center px-4
 ">
    
    

    
    {/* <div className="bg-white ">
       {loading && (
        <p className="text-black ">Registering, please wait...</p>)}
    </div> */}

 
   
       { (loadingh || loading) && (
       <Loading/>
       )}
            {showRegisterPopup && (
  <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
    User Registered successfully!
  </div>
)} 


   
    


    <form onSubmit={handleSubmit} 
    className={` w-full  mt-4 mb-4
     max-w-md h-full bg-white rounded-2xl drop-shadow-2xl p-8 pb-12 ${loadingu ? "pointer-events-none opacity-50" : ""}`} >


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



         <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload Profile Photo
        </label>
              {formData.profilePhotoBase64 && (
          <img
            key={formData.profilePhotoBase64} 
            src={formData.profilePhotoBase64}
            alt="Profile Preview"
            className="w-20 h-20 mb-2 rounded-full object-cover"
          />
        )}

        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
             
            const file = e.target.files[0];
            console.log("Selected file:", file);
            if (file) {
              const base64 = await convertToBase64(file);
               console.log("Base64 output:", base64.slice(0, 100));
              setFormData(prev => ({ ...prev, profilePhotoBase64: base64,profilePhoto:file.name }));
            }
          }}
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none hover:border-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
        />


      </div>
      
       <label className='text-gray-500'>
        Qualification:
         <div>
        { loadingq &&
        <p></p>
        }</div>
        <select className="border rounded-sm"  name="qualification" value={formData.qualification} onChange={handleChangeForQualification} required>
          
                <option value="">-- Select --</option>
                 {qualifications.map((qlf, index) => (
                <option key={index} value={qlf}>
                 {qlf}
               </option>
                ))}
            </select>
       
      </label>
      <br />


       {formData.qualification == "PG" && (
        <div className="space-y-2">
          <p className="text-gray-500">Select Course:</p>

           <div>
        { loadingp &&
        <p>Loading  Courses ...</p>
        }</div>
          
          {
          
       
          pgcourses.map((course) => (
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
      {formData.qualification == "UG" && (
        <div className="space-y-2">
          <p className="text-gray-500">Select Course:</p>
           <div>
        { loadingu &&
        <p>Loading  Courses ...</p>
        }</div>
          
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

        <div>
        { loadingh &&
        <p></p>
        }
      </div>
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
                     {id ? "Update " : "Register Now"}
                </button>


{/* <p className="text-sm text-center text-gray-600 mt-4">
        
        <a
          href="/admin"
          className="text-blue-600 hover:underline font-medium"
        >
          Dashboard
        </a>
      </p> */}
               
      

    {/* {formData.email === "admin@gmail.com" && (
  <p className="text-sm text-center text-gray-600 mt-4">
    <a
      href="/admin"
      className="text-blue-600 hover:underline font-medium"
    >
      Dashboard
    </a>
  </p>
)} */}


    </form>

    

     
   </div>
  );
}

export default FormPage;
