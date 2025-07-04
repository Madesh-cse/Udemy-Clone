import "../../styles/Components/_cardslider.scss";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineVerified } from "react-icons/md";
import Rating from "../Features/Rating";
import { Link } from "react-router-dom";

interface Course {
  id: number;
  title: string;
  instructor: string;
  image: string;
  price: number;
  rating: number;
  totalrate: number;
  bestSeller?: boolean;
}

function CourseCard({ course }: { course: Course }) {
  return (
    <div className="course-card-hover">
      <div className="course-card">
      <Link to="/">
        <img src={course.image} alt="" />
        <div className="course-description">
          <h3>{course.title.length > 50 ? `${course.title.slice(0, 40)}...` : course.title}</h3>
          <p>{course.instructor}</p>
          <p>
            <Rating value={course.rating} review={course.totalrate} />
          </p>
          <h4>
            <FaIndianRupeeSign />
            {course.price}
          </h4>
          <div className="course-upgrade">
             <p className="Premium">
              <span>
                <MdOutlineVerified />
              </span>
              Premium
            </p>
            {course.bestSeller && <p className="badge">Bestseller</p>}
          </div>
        </div>
      </Link>
    </div>
    </div>
  );
}

export default CourseCard;
