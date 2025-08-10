import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import "../../styles/Components/_courseCreation.scss";
import { FaGreaterThan, FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineVerified } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaRegHeart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

interface CourseInstruction {
  role: string;
  Budget: string;
  ProjectRisk: string;
  CaseStudy: string;
  Requirement: string;
  AboutCourse: string;
}

interface CourseDetailsType {
  _id: string;
  title: string;
  author: string;
  courseSub: string;
  description: string;
  imageUrl: string;
  language: string;
  level: string;
  catogory: string;
  path: string;
  filename: string;
  price: string;
  courseInstruction: CourseInstruction;
}

// type CourseDetailsProps = {
//   userId: string;
// };

function CourseDetails() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { courseCardId } = useParams();
  const userId = localStorage.getItem("userId");

  const [course, setCourse] = useState<CourseDetailsType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/courseCreation/course-detail/${courseCardId}`
        );
        setCourse(res.data.course);
      } catch (err) {
        console.error("Error fetching course details:", err);
        setError("Failed to load course details.");
      } finally {
        setLoading(false);
      }
    };

    if (courseCardId) fetchCourseDetails();
  }, [courseCardId]);

const handleAddToCart = async() => {
  if (course && userId) {
    try {
      await addToCart(userId, course._id);
      navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }
};

  if (loading) return <p>Loading course details...</p>;
  if (error) return <p>{error}</p>;
  if (!course) return <p>No course found.</p>;

  return (
    <div className="course-details">
      <div className="course-detail-background">
        <div className="course-detail-content">
          {/* Left Side */}
          <div className="course-container-1">
            <h3>
              <span>Development</span> <FaGreaterThan />
              <span> Web Development</span> <FaGreaterThan />
              <span> {course.catogory}</span>
            </h3>
            <div className="course-detail-title">
              <h1>{course.title}</h1>
              <p>{course.courseSub}</p>
              <p>{course.description}</p>
              <p className="badge">Bestseller</p>
              <p className="author">
                Created by <Link to="/">{course.author}</Link>
              </p>
            </div>
            <div className="course-position-card">
              <div className="first-box">
                <MdOutlineVerified />
                <p>Premium</p>
              </div>
              <div className="second-box">
                <p>
                  Access this top-rated course, plus <br /> 26,000+ more
                  top-rated courses, <br /> with a Udemy plan.{" "}
                  <Link to="/">See Plans & Pricing</Link>
                </p>
              </div>
              <div className="third-box">
                <div className="rating-value">4.7</div>
                <div className="stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span style={{ color: "#ccc" }}>★</span>
                </div>
                <div className="rating-count">(3,456 ratings)</div>
              </div>
              <div className="fourth-box">
                <IoMdContacts />
                <p>831,631</p>
                <p>learners</p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="course-container-2">
            <div className="course-box">
              <img src={course.imageUrl} alt={course.title} />
              <div className="Tab-content">
                <Tabs>
                  <TabList className="tab-flex">
                    <Tab>Personal</Tab>
                    <Tab>Teams</Tab>
                  </TabList>

                  {/* Personal Tab */}
                  <TabPanel>
                    <div className="tab-course-content">
                      <div className="content-1">
                        <p className="premium-note">
                          <MdOutlineVerified className="verified-icon" />
                          This Premium course is included in plans
                        </p>
                        <div className="title">
                          <h3>Subscribe to Udemy’s top courses</h3>
                          <p>
                            Get this course, plus 26,000+ of our top-rated
                            courses, with Personal Plan.{" "}
                            <Link to="/">Learn more</Link>
                          </p>
                        </div>
                        <div className="Subscription">
                          <Link to="">Start subscription</Link>
                          <p>Starting at ₹650 per month</p>
                          <p>Cancel anytime</p>
                          <div className="line-name">
                            <hr className="line" />
                            <span className="name">or</span>
                            <hr className="line" />
                          </div>
                          <div className="price-container">
                            <h1 className="course-price">
                              <FaIndianRupeeSign />
                              {course.price}
                            </h1>
                            <div className="Btn">
                              <button
                              type="button"
                                className="Cart"
                                onClick={handleAddToCart}
                              >
                                Add to cart
                              </button>
                              <button className="like-course">
                                <FaRegHeart />
                              </button>
                              <Link to="" className="Purchases">
                                Buy now
                              </Link>
                              <p>30-Day Money-Back Guarantee</p>
                              <p>Full Lifetime Access</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabPanel>

                  {/* Teams Tab */}
                  <TabPanel>
                    <div className="tab-content-2">
                      <p className="premium-note">
                        <MdOutlineVerified className="verified-icon" />
                        This Premium course is included in plans
                      </p>
                      <div className="team-img">
                        <img
                          src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
                          alt=""
                        />
                      </div>
                      <div className="title">
                        <p>
                          Get this course, plus 26,000+ of our top-rated
                          courses, with Personal Plan.{" "}
                          <Link to="/">Learn more</Link>
                        </p>
                      </div>
                      <div className="Btn">
                        <Link to="" className="Purchases">
                          Try Udemy Business
                          {/* <button onClick={Click}>Submit</button> */}
                        </Link>
                      </div>
                      <div className="team-list">
                        <ul>
                          <li>For teams of 2 or more users</li>
                          <li>30,000+ fresh & in-demand courses</li>
                          <li>Learning Engagement tools</li>
                          <li>SSO and LMS Integrations</li>
                        </ul>
                      </div>
                    </div>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Instructions */}
      <div className="course-instruction-container">
        <h2>What You Will Learn</h2>
        {course.courseInstruction && (
          <div className="course-instruction-box">
            <ul>
              <li>{course.courseInstruction.role}</li>
              <li>{course.courseInstruction.Budget}</li>
              <li>{course.courseInstruction.ProjectRisk}</li>
              <li>{course.courseInstruction.CaseStudy}</li>
            </ul>
            <ul>
              <li>{course.courseInstruction.Requirement}</li>
              <li>{course.courseInstruction.AboutCourse}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseDetails;
