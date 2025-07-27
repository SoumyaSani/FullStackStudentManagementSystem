import {React,useState, useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { CheckCircle } from "lucide-react";


function ResultPage() {
  
  const location = useLocation();
  const navigate = useNavigate();
   const [pendingUsers, setPendingUsers] = useState([]);
  
    useEffect(() => {
      const users = JSON.parse(localStorage.getItem("pendingUsers")) || [];
      setPendingUsers(users);
    }, []);

  
  

  if (!pendingUsers) {
    return (
      <div>
        <h2>No Data Submitted!</h2>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    
    <div className="justify-center justify-items-center">

       
      {/* <h2>Form Data :</h2>
      <p><strong>First Name:</strong> {data.firstName}</p>
      <p><strong>Last Name:</strong> {data.lastName}</p>
      <p><strong>Email:</strong> {data.email}</p>
      <p><strong>Age:</strong> {data.age}</p>
      <p><strong>Qualification:</strong> {data.qualification}</p>
      <p><strong>Course:</strong> {data.course}</p>
      <p><strong>Hobbies:</strong> {data.hobbies.join(", ")}</p>
       <p><strong>About:</strong> {data.about}</p> */}

     

      <div className="items-center space-x-2 mt-4 bg-blue-50 border border-blue-200  rounded-md p-3 shadow-md w-fit">
        <div className="flex ">
       <CheckCircle className="text-blue-500 w-6 h-6" />
      <p className="text-blue-700 font-medium">Data uploaded successfully</p>
      </div>
      
      </div>

      
     
    
    </div>
  );
}

export default ResultPage;
