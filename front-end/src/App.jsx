import React from "react";
import Login from "./components/Login"
import Page from "./components/dashboard/page";
import Signup from "./components/Signup"
import styles from "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import HospLogin from "./components/admin/HospLogin";
import DocLogin from "./components/doctor/docLogin";
import HospSignup from "./components/admin/HospRegis";
import HospDash from "./components/admin/HospDash";
import DocPanel from "./components/doctor/docPanel";
import Doxaab from "./components/dashboard/components/Doxaab"

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/mydashboard" replace />} />
            <Route
                path="/login"
                element={
                <>
                    <Login />
                </>
                }
            />
            <Route
                path="/mydashboard"
                element={
                  <>
                    <Page />
                  </>
                }
            />       
            
            <Route 
                path="/signup" 
                element={
                <>
                <Signup/>
                </>
            } />
            <Route
                path="/admin/panel"
                element={
                <>
                    <HospDash/>
                </>
                }
            />
            <Route
                path="/admin/login"
                element={
                <>
                    <HospLogin/>
                </>
                }
            />
            <Route
                path="/admin/signup"
                element={
                <>
                    <HospSignup/>
                </>
                }
            />
            
            <Route
                path="/doctor/login"
                element={
                <>
                    <DocLogin/>
                </>
                }
            />
            <Route
                path="/doctor/panel"
                element={
                <>
                    <DocPanel/>
                </>
                }
            />

           <Route
                path="/Doxaab"
                element={
                <>
                    <Doxaab />
                </>
                }
            />
            
            
            <Route path="*" element={<h1>galt page</h1>} />
          
        </Routes>
      </BrowserRouter>
    );
  }
  

