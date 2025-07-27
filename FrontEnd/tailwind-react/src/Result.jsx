import React,{ useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import { CheckCircle } from "lucide-react";


function Result() {

  const [showConfirmModal, setShowConfirmModal] = useState(false);
const [deleteUserId, setDeleteUserId] = useState(null);
const [deleteUserName, setDeleteUserName] = useState('');
const [showSuccessPopup, setShowSuccessPopup] = useState(false);
const [showImageModal, setShowImageModal] = useState(false);
const [image,setImage] = useState({});
const [showUpdatePopup,setShowUpdatePopup] = useState()







  
  const location = useLocation();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);


  useEffect(() => {
    if (location.state?.showUpdatePopup) {
      setShowUpdatePopup(true);

      // Auto-hide the popup after 2 seconds
      const timer = setTimeout(() => {
        setShowUpdatePopup(false);
      }, 1500);

      return () => clearTimeout(timer); // Clean up on unmount
    }
  }, [location.state]);
  
  const [showDetails, setShowDetails] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
   fetchUsers();
  
  }, []);
 



   const fetchUsers=() =>{
     axios.get("http://localhost:8080/getAll")
      .then(response => {
        setUsers(response.data);
        
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
   };

  


 
   const handleEdit = (id) => {
    //sani
    navigate(`/admin/register/${id}`,
      {
       state: { redirectAfterUpdate: true }
       }
    );
  };

  const handleDelete = (id, name) => {
  setDeleteUserId(id);
  setDeleteUserName(name);
  setShowConfirmModal(true);
};


const confirmDelete = () => {
  DeleteUser(deleteUserId);         // This already refreshes user list
  setShowConfirmModal(false);
  setDeleteUserId(null);
  setDeleteUserName('');

  // ✅ Show success message
  setShowSuccessPopup(true);

  // ⏳ Auto-hide the popup after 2 seconds
  setTimeout(() => {
    setShowSuccessPopup(false);
  }, 2000);
};


const cancelDelete = () => {
  setShowConfirmModal(false);
  setDeleteUserId(null);
  setDeleteUserName('');
};



   

  const fetchUserById = (id) => {
  
  axios.get(`http://localhost:8080/edit/${id}`)
    .then((res) => {
      if (res.data) {
        setSelectedUser(res.data); 
        setShowDetails(true);  
        console.log(res.data)      
      }
      
    })
    .catch((err) => {
      console.error("Error fetching user:", err);
    })
    
};

const handleShowDetails = (id) => {

  fetchUserById(id);
};




  
   const DeleteUser=(id) =>{
     axios.delete(`http://localhost:8080/delete/${id}`)
      .then(() => {
       fetchUsers();
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
   };


  // if (!data) {
  //   return (
  //     <div>
  //       <h2>No Data Submitted!</h2>
  //       <button onClick={() => navigate("/")}>Go Back</button>
  //     </div>
  //   );
  // }

  return (

    
    <div style={{ padding: "20px" }}>
      {showSuccessPopup && (
  <div className="fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
    User deleted successfully!
  </div>
)}

       {showUpdatePopup && (
  <div className="fixed top-6 right-6 z-50  bg-green-100 border border-green-300 text-green-800 px-6 py-4 rounded-lg shadow-xl flex items-center space-x-3 animate-slide-down">
    <CheckCircle className="w-6 h-6 text-green-600" />
    <span className="font-medium">User updated successfully!</span>
  </div>
)}


{showImageModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-60">
    <div className="relative bg-white p-4 rounded shadow-lg">
      <img
        src={image}
        alt="Full View"
        className="max-w-full max-h-[80vh] object-contain rounded"
      />
      <button
        onClick={() => setShowImageModal(false)}
        className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
      >
        ✕
      </button>
    </div>
  </div>
)}


      {showConfirmModal && (
  <div className="fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-gray-300 p-6 rounded-lg shadow-md text-center w-[90%] max-w-md">
      <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
      <p className="mb-6">Are you sure you want to delete <span className="font-bold text-red-600">{deleteUserName}</span>?</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={confirmDelete}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Yes, Delete
        </button>
        <button
          onClick={cancelDelete}
          className="bg-white text-black px-4 py-2 rounded hover:bg-green-600"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
)}


      {showDetails && selectedUser && (
  <div style={{
    position: 'fixed',
    top: 0, left: 0,
    width: '100%', height: '100%',
    backgroundColor: 'rgba(0,0,0,0.6)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 1000
  }}>
    <div style={{
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '8px',
      minWidth: '400px',
      boxShadow: '0 0 10px rgba(0,0,0,0.5)'
    }}>
      <h3>User Details</h3>
      <p><strong>Photo:</strong> { selectedUser.profilePhotoBase64 && (
                          <img
                            src={selectedUser.profilePhotoBase64}
                            alt="Profile"
                            className="w-16 h-16 rounded-full object-cover"
                          />
                        )}</p>
      <p><strong>ID:</strong> {selectedUser.userId}</p>
      <p><strong>Name:</strong> {selectedUser.firstName} {selectedUser.lastName}</p>
      <p><strong>Email:</strong> {selectedUser.email}</p>
      <p><strong>Age:</strong> {selectedUser.age}</p>
      <p><strong>Qualification:</strong> {selectedUser.qualification}</p>
      <p><strong>Course:</strong> {selectedUser.course}</p>
      <p><strong>About:</strong> {selectedUser.about}</p>
      <p><strong>Hobbies:</strong> {selectedUser.hobbies?.join(", ") || "No hobbies"}</p>

      <button onClick={() => {setShowDetails(false);setSelectedUser(null);}} className="bg-red-600 text-white px-2 py-1 mt-3 rounded">
        Close
      </button>
    </div>
  </div>
)}

    <div className="justify-center justify-items-center">
       <h2 className="font-bold text-2xl ">User List</h2>
     
      {users.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">FirstName</th>

              <th className="py-2 px-4 border">LastName</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Age</th>
              <th className="py-2 px-4 border">Qualification</th>
              <th className="py-2 px-4 border">Course</th>
              <th className="py-2 px-4 border">About</th>
              <th className="py-2 px-4 border">Hobbies</th>
              <th className="py-2 px-4 border">Photo</th>
               <th className="py-2 px-4 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.userId}>
                <td className="py-2 px-4 border">{user.userId}</td>
                <td className="py-2 px-4 border">{user.firstName}</td>
                <td className="py-2 px-4 border">{user.lastName}</td>
                <td className="py-2 px-4 border">{user.email}</td>
                <td className="py-2 px-4 border">{user.age}</td>
                <td className="py-2 px-4 border">{user.qualification}</td>
                <td className="py-2 px-4 border">{user.course}</td>
                <td className="py-2 px-4 border">{user.about}</td>
                <td className="py-2 px-4 border">
                  {user.hobbies && user.hobbies.length > 0
                    ? user.hobbies.join(', ')
                    : "No hobbies"}
                </td>



                {/* <td className="py-2 px-4 border">
                          {user.profilePhotoBase64 && (
                          <img
                            src={user.profilePhotoBase64}
                            alt="Profile"
                            className="w-16 h-16 rounded-full object-cover"
                            onClick={() =>{ setShowImageModal(true); setImage(user.profilePhotoBase64)}}
                            
                          />
                        )}
                </td> */}
                
               <td className="py-2 px-4 border">
  {user.profilePhotoBase64 && user.profilePhoto && (
    <span
      className="text-blue-600 hover:underline cursor-pointer"
      onClick={() => {
        setShowImageModal(true);
        setImage(user.profilePhotoBase64);
      }}
    >
      {user.profilePhoto}
    </span>
  )}
</td>


        


                    

                  <td className="p-2 border">
                <button
                  onClick={() => handleEdit(user.userId)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
            
                <button
                  onClick={() => handleDelete(user.userId,user.firstName)}
                  className="bg-red-600 text-white px-2 py-1 ml-2 rounded"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleShowDetails(user.userId)}
                  className="bg-green-500 text-white px-2 py-1 ml-2 rounded"
                >
                  Show Details
                </button>
              </td> 
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users found.</p>
      )}
    </div>

    
      
    </div>

  );
}

export default Result;
