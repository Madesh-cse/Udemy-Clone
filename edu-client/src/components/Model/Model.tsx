import "../../styles/Components/_cardslider.scss";
import { MdOutlineVerified } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

interface Course {
  id: number;
  title: string;
  instructor: string;
  image: string;
  price: number;
  rating: number;
  totalrate: number;
  bestSeller?: boolean;
  highlights?: string[];
}

interface ModelProps {
  course: Course;
}

function Model({ course }: ModelProps) {
  return (
    <div className="course-model">
      <h3>{course.title}</h3>
      <div className="course-upgrade">
        <p className="Premium">
          <span>
            <MdOutlineVerified />
          </span>
          Premium
        </p>
        {course.bestSeller && <p className="badge">Bestseller</p>}
      </div>
      <p>
        <strong>Instructor:</strong> {course.instructor}
      </p>
      <p>
        <strong>Duration:</strong> 17.5 hrs
      </p>
      <p>
        <strong>Level:</strong> All Levels
      </p>
      <p className="updates">
        Updated <span>January 2025</span>17.5 total hours 266 lectures All
        Levels{" "}
      </p>
      {course.highlights && course.highlights.length > 0 && (
        <ul className="course-highlights">
          {course.highlights.map((content, index) => (
            <li key={index} className="highlight-item">
              <span className="tick-icon">
                <TiTick />
              </span>
              <span>{content}</span>
            </li>
          ))}
        </ul>
      )}
      <div className="Btn">
        <button className="Cart">Go to cart</button>
        <button className="like-course">
          <FaRegHeart />
        </button>
      </div>
    </div>
  );
}

export default Model;
