import "./main.scss";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Features/Register";
import Home from "./Pages/Home";
import Login from "./components/Features/Login";
import ProtectedRoute from "./components/ProtectedRoute/ProductedRoute"; 
import IsAuthenticatedHome from "./components/isAuthenticatedHome/isAuthenticatedHome";
import { Navigate } from "react-router-dom";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="signup" element={<Register />}></Route>
        <Route path="login" element={isAuthenticated ? <Navigate to="/AuthenticatedHome" /> : <Login />}></Route>
        <Route
          path="AuthenticatedHome"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <IsAuthenticatedHome />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
