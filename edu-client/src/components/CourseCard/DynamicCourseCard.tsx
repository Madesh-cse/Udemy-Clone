import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../styles/Components/Instructor/_dynamic-course-slider.scss";
import { MdOutlineVerified } from "react-icons/md";
import DynamicModel from "../Model/DymaicModel";

interface Course {
  _id: string;
  title: string;
  author: string;
  price: string;
  path: string;
  filename: string;
  currentPrice: string;
}

function DynamicCourseSlider() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [hoverPosition, setHoverPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  

  console.log(courses)

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/courseCreation/course-card"
        );
        setCourses(res.data.courseCard);
      } catch (err) {
        console.error("Error fetching courses:", err);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="card-slider-wrapper">
      <div className="card-slider-wrapper-title">
        <h1>Because you enrolled in " <Link to=''>NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)</Link>"</h1>
      </div>

      <Swiper
        spaceBetween={5}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
          // 1280: { slidesPerView: 4 },
        }}
      >
        {courses.map((course) => (
          <SwiperSlide key={course._id}>
            <div className="course-card-hover"  onMouseEnter={(e)=>{
              const rect = e.currentTarget.getBoundingClientRect()
              setHoveredId(course._id);
              setHoverPosition({ top: rect.top + window.scrollY, left: rect.right + 10 })
            }}
            onMouseLeave={() => setHoveredId(null)}
            > 
              <div className="course-card">
                <Link to={`/course-detail/${course._id}`}>
                  <img
                    src={`http://localhost:8080/${course.path}`}
                    alt={course.title}
                  />
                  <div className="course-description">
                    <h3>
                      {course.title.length > 50
                        ? `${course.title.slice(0, 40)}...`
                        : course.title}
                    </h3>
                    <p>{course.author}</p>
                    <h4 className="discounted-price">₹{course.currentPrice}</h4>
                    <span className="original-price">₹{course.price}</span>
                    <div className="course-upgrade">
                      <div className="Premium">
                        <span>
                          <MdOutlineVerified />
                        </span>{" "}
                        Premium
                      </div>
                      <div className="badge">New</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
       {hoveredId && (
        <div
          className="course-model-fixed"
          style={{
            position: "absolute",
            top: hoverPosition.top,
            left: hoverPosition.left,
            zIndex: 1000,
          }}
        >
          <DynamicModel courseCardId={hoveredId} />
        </div>
      )}
    </div>
  );
}

export default DynamicCourseSlider;
