import { useState } from "react"
import Linkbtndropandradio from "./Linkbtndropandradio";

const RegisterForm=()=>
{
 const [formData ,setFormData] =useState({
firstName:'',
lastName:'',
email:'',
age:'',
qualification:'',
about:'',
course:'',
password:'',
confirmPassword:'',
checkbox:false
    });


     const [selectedOption, setSelectedOption] = useState('');
      const [selectedRadio, setSelectedRadio] = useState('');
    
      // Radio options based on dropdown selection
      const radioOptions = {
        UG: ['BSc', 'Bcom', 'BCA'],
        PG: ['MSC', 'MCOM', 'MCA'],
        
      };



const Hobbies = ['Cricket', 'Singing', 'Dancing', 'Riding'];
  const [selectedHobbies, setSelectedHobbies] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      // Add to array if not already present
      setSelectedHobbies([...selectedHobbies, value]);
    } else {
      // Remove from array if unchecked
      setSelectedHobbies(
        selectedHobbies.filter((lang) => lang !== value)
      );
    }
  };

  



     const [submittedData, setSubmittedData] = useState(null);

      


 

    const handleChange =(e) =>{
        setFormData({...formData, [e.target.name]: e.target.value})
        
    };




    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log('submitted Data', formData);
        alert('Registered Successfully');
        setSubmittedData(formData);
        console.log(submittedData);
       
        setFormData({
            firstName : '',
            lastName:'',
            email:'',
            age:'',
            qualification:'',
            course:'',
            
            about:'',
            password:'',
            confirmPassword:'',
            
            checkbox:false

        });
    };



    return(
        <div className="flex items-center justify-center min-h-screen bg bg-gray-500">
            <form onSubmit={handleSubmit} className="w-full rounded-xs max-w-md h-full bg-gray-100 p-8 pb-12 ">
             
                
                <h2 className="text-4xl  font-normal font-roboto text-center mb-4">Register</h2>
               
           

                <p className=" text-sm text-gray-400 text-center font-roboto font-normal pb-5 ">Create your account. It's free and only takes a minute</p>
               
                <div className=" flex mb-8  space-x-4" >

                    <input type="text" name="firstName" 
                    value={formData.firstName}
                    onChange={handleChange}
                     placeholder=" First Name"
                      className="w-full  h-8 border border-gray-300 rounded-xs bg-white  field-sizing-content"
                      required/>
                 
               
                   
                    <input type="text" name="lastName"
                    value={formData.lastName} 
                     onChange={handleChange}
                    placeholder=" Last Name" 
                    required
                    className="w-full   border-gray-300 border h-8 rounded-xs bg-white  field-sizing-content"/>
               
                </div>

                 <div className="mb-8 flex">
                   
                    <input type="email" name="email"
                    value={formData.email}
                     onChange={handleChange}
                     required
                      placeholder=" Email"
                       className="w-full border border-gray-300 h-8 rounded-xs bg-white  field-sizing-content"/>
                 
                </div>
               <div className="mb-8">
                 <input type="number"
                    value={formData.age}
                     onChange={handleChange}
                      name="age"
                      required
                       placeholder=" Age"
                        className="w-full border border-gray-300 h-8  rounded-xs bg-white  field-sizing-content"/>
               </div>
               <div className="pb-2">
                 <div className="pb-2 space-x-4">
      {/* Dropdown */}
      <label className='text-gray-500' >Qualification:</label>
      <select
        className="border rounded-sm "
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value);
          setSelectedRadio(''); // Reset radio selection
        }}
      >
        <option value="">-- Select Category --</option>
        <option value="UG">UG</option>
        <option value="PG">PG</option>
       
      </select>

      {/* Radio Buttons */}
      {selectedOption && (
        <div className="space-y-2">
          <p className="text-gray-400">Course :</p>
          {radioOptions[selectedOption].map((item) => (
            <label key={item} className="flex items-center space-x-2">
                
              <input
                type="radio"
                name="option"
                value={item}
                checked={selectedRadio === item}
                onChange={(e) => setSelectedRadio(e.target.value)}
              />
              <span>{item}</span>
            </label>
          ))}
        </div>
      )}
    </div>
               </div>

                <label className="text-gray-500"> Hobbies :</label>
                <br />
               <div className=" space-x-2.5 mb-4">
                 {Hobbies.map((lang) => (
        <label key={lang}>
            
          <input
            type="checkbox"
            value={lang}
            checked={selectedHobbies.includes(lang)}
            onChange={handleCheckboxChange}
           
                       />
                      {lang}
                         </label>
                     ))}


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

            <div className="flex mb-3 ">
             
            <input type='checkbox' name='checkbox' required checked={formData.checkbox} onChange={handleChange} />
           <p className="text-sm flex"> <p className="text-gray-400 pl-1">I accept the</p><p className="text-green-400">Terms of Use </p> <span className="text-gray-400 pl-1"> & </span><p className="text-green-400 pl-1"> Privacy Policy</p></p>
              
            </div>
            
       

                

                <button type="submit" className="justify-center w-96 h-8 bg-green-600 text-white rounded-xs 
                 field-sizing-content hover:bg-green-800">
                    Register Now
                </button>

                
            
            
            </form>

             {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>First Name: {submittedData.firstName}</p>
          <p>Last Name: {submittedData.lastName}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
          <p>About: {submittedData.about}</p>
          <p> Qualification: {selectedOption}</p>
          <p>Course: {selectedRadio}</p>
           <p>Hobbies:</p>
      <ul>
        {selectedHobbies.map((lang) => (
          <li key={lang}>{lang}</li>
        ))}
      </ul>
      
          <p>password: {submittedData.password}</p>
          <p>confirmPassword: {submittedData.confirmPassword}</p>
        </div>
      )}
            

            


        </div>

    );
};
export default RegisterForm;