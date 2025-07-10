import "./main.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState,useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Features/Register";
import Home from "./Pages/Home";
import Login from "./components/Features/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProductedRoute"; 
import AuthenticatedHome from "./Pages/AuthenticatedHome";
import AuthNavbar from "./components/isAuthenticatedHome/Navabar/Navbar";
import InstructorDashBoard from "./Pages/InstructorDashBoard";

function App() {
  const [IsAuthenticated,setIsAuthenticated] = useState(!!localStorage.getItem("token"));
  const [role,setrole] = useState(localStorage.getItem('role')|| '')

  useEffect(()=>{
    const checkToken = ()=>{
      const token = localStorage.getItem("token")
       const storedRole = localStorage.getItem("role");
      setIsAuthenticated(!!token)
      setrole(storedRole|| "")
    }
    window.addEventListener("storage",checkToken)
    return ()=> window.removeEventListener("storage",checkToken)
  },[]) 

  return (
    <Router>
     {IsAuthenticated ? <AuthNavbar setIsAuthenticated={setIsAuthenticated}/>: <Navbar />  }
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="signup" element={<Register />}></Route>
        <Route path="login" element={<Login setIsAuthenticated = {setIsAuthenticated} />}></Route>
        <Route
          path="authenticated-home"
          element={
            <ProtectedRoute isAuthenticated={IsAuthenticated && role === "user"}>
              <AuthenticatedHome />
            </ProtectedRoute>
          }
        /> 
        <Route
          path="instructor-dashboard"
          element={
            <ProtectedRoute isAuthenticated={IsAuthenticated && role === "instructor"}>
              <InstructorDashBoard/>
            </ProtectedRoute>
          }
        /> 
      </Routes>
    </Router>
  );
}

export default App;
