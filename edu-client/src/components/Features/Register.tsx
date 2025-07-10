import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "../../styles/Components/_register.scss";
import { MdOutlineMailOutline } from "react-icons/md";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

function Register() {
  const Navigate = useNavigate();
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  console.log(userData);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/auth/signup",
        userData
      );
      console.log(response.data);
      setuserData({
        name: "",
        email: "",
        password: "",
        role: "",
      });
      Navigate("/Login");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error(err.response?.data); // Validation or server error
        alert(err.response?.data.message);
      }
      if(!userData.role){
        alert('Select the Role')
      }
    }
  };

  return (
    <>
      <section className="Register-Card">
        <div className="Register-flex">
          <div className="Register-image">
            <img
              src="	https://frontends.udemycdn.com/components/auth/desktop-illustration-step-2-x2.webp"
              alt="Registration-Logo-udemy"
            />
          </div>
          <div className="Register-Form">
            <h1>Sign up with email</h1>
            <form onSubmit={handleSubmit}>
              <div className="Name">
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={(e) =>
                    setuserData({ ...userData, name: e.target.value })
                  }
                  placeholder="Full Name"
                />
              </div>
              <div className="Email">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={userData.email}
                  onChange={(e) =>
                    setuserData({ ...userData, email: e.target.value })
                  }
                />
              </div>
              <div className="Email">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={userData.password}
                  onChange={(e) =>
                    setuserData({ ...userData, password: e.target.value })
                  }
                />
              </div>
              <div className="Role-based">
                <select
                  name="role"
                  id="role"
                  value={userData.role}
                  onChange={(e) =>
                    setuserData({ ...userData, role: e.target.value })
                  }
                  required
                >
                  <option value="">Select the Role</option>
                  <option value="user">user</option>
                  <option value="instructor">instructor</option>
                </select>
              </div>
              <div className="Recommendation">
                <input type="checkbox" />
                <NavLink to="/">
                  {" "}
                  Send me special Offers,personalized recommendation and <br />{" "}
                  learning tips
                </NavLink>
              </div>
              <div className="email-btn-box">
                <button className="email-btn" type="submit">
                  Continue with email
                </button>
                <span>
                  <MdOutlineMailOutline />
                </span>
              </div>
            </form>
            <div className="Other-options">
              <span>Other Sign up options</span>
            </div>
            <div className="Other-platform">
              <NavLink to="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png"
                  alt=""
                />
              </NavLink>
              <NavLink to="/">
                <img
                  src="https://www.pngplay.com/wp-content/uploads/9/Facebook-Free-PNG.png"
                  alt=""
                />
              </NavLink>
              <NavLink to="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt=""
                />
              </NavLink>
            </div>
            <p className="Term-and-condition">
              By signing up, you agree to our{" "}
              <NavLink to="/">Terms of Use</NavLink> and{" "}
              <NavLink to="/">Privacy Policy</NavLink>
            </p>
            <p className="Already-have-account">
              Already have an account? <NavLink to="/">Log in</NavLink>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Register;
