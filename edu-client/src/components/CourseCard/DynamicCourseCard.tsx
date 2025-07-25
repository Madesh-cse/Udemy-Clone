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
        <h1>Explore Our Courses</h1>
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
            <div className="course-card-hover">
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
    </div>
  );
}

export default DynamicCourseSlider;
