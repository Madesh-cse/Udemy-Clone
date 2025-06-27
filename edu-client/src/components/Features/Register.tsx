import { NavLink } from "react-router-dom";
import "../../styles/Components/_register.scss";
import { MdOutlineMailOutline } from "react-icons/md";
import Footer from "../Footer/Footer";

function Register() {
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
            <form action="">
              <div className="Name">
                <input type="text" id="Name" placeholder="Full Name" />
              </div>
              <div className="Email">
                <input type="email" name="email" placeholder="Email" />
              </div>
            </form>
            <div className="Recommendation">
              <input type="checkbox" />
              <NavLink to="/">
                {" "}
                Send me special Offers,personalized recommendation and <br />{" "}
                learning tips
              </NavLink>
            </div>
            <div className="email-btn-box">
              <button className="email-btn">Continue with email</button>
              <span>
                <MdOutlineMailOutline />
              </span>
            </div>
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
      <Footer/>
    </>
  );
}

export default Register;
