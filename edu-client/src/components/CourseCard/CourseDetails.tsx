import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../styles/Components/_courseCreation.scss";
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineVerified } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";

interface CourseDetails {
  _id: string;
  title: string;
  courseSub: string;
  description: string;
  imageUrl: string;
  language: string;
  level: string;
  catogory: string;
  path: string;
  filename: string;
}

function CourseDetails() {
  const { courseCardId } = useParams();
  const [course, setCourse] = useState<CourseDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  console.log("Course ID:", courseCardId);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/courseCreation/course-detail/${courseCardId}`
        );
        setCourse(res.data.course);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching course details:", err);
        setError("Failed to load course details.");
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [courseCardId]);

  if (loading) return <p>Loading course details...</p>;
  if (error) return <p>{error}</p>;
  if (!course) return <p>No course found.</p>;

  return (
    <div className="course-details">
      <div className="course-detail-background">
        <div className="course-detail-content">
          <div className="course-container-1">
            <h3>
              <span>Development</span> <FaGreaterThan />
              <span> Web Development</span> <FaGreaterThan />
              <span> Angular</span>
            </h3>
            <div className="course-detail-title">
              <h1>{course.title}</h1>
              <p>{course.courseSub}</p>
              <p>{course.description}</p>
              <p className="badge">Bestseller</p>
              <p className="author">
                Created by <Link to="/">Maximilian Schwarzmüller</Link>
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
                  top-rated courses, <br /> with a Udemy plan. See Plans &
                  Pricing
                </p>
              </div>
              <div className="third-box">
                <div className="rating-value">4.7</div>
                <div className="stars">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span style={{ color: "#ccc" }}>★</span>{" "}
                  {/* faded star for 4.7 */}
                </div>
                <div className="rating-count">(3,456 ratings)</div>
              </div>
              <div className="fourth-box">
                <IoMdContacts />
                <p>831,631</p>
                <p>leaners</p>
              </div>
            </div>
          </div>
          <div className="course-container-2">
            <div className="course-box">
              <img src={course.imageUrl} alt={course.title} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
