import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormPage from "./FormPage";
import ResultPage from "./ResultPage";
import Result from "./Result";
import LoggedINPage from "./LoggedINPage";
import Login from "./Login";
import Admin from "./Admin";
import CheackList from "./CheackList";
import AdminLayout from "./AdminLayout";
import UserLayoutPage from "./UserLayoutPage";
//import AdminDashboard from "./AdminDashboard";


function AppF() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        
        
          <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Admin />} /> {/* 👈 renders for /admin */}
          <Route path="register" element={<FormPage />} />
          <Route path="result" element={<ResultPage />} />
          <Route path="showData" element={<Result />} />
          <Route path="register/:id" element={<FormPage />} />
          <Route path="checklist" element={<CheackList />} />
        </Route>


         <Route path="/user" element={<UserLayoutPage/>}>
          <Route index element={<LoggedINPage />} /> {/* 👈 renders for /admin */}
          <Route path="result" element={<ResultPage />} />
          <Route path="register/:id" element={<FormPage />} />
        </Route>
        
        
        <Route path="/result" element={<ResultPage />} />
        
         {/* <Route path="/admin" element={<Admin/>} /> */}
      </Routes>
    </Router>
  );
}

export default AppF;
