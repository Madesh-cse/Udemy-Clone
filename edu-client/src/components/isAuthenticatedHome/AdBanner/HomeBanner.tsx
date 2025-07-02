import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

import '../../../styles/Components/Auth/_banner.scss';
import { BannerSlide } from "../../../data/AuthCourse";
import { Link } from "react-router-dom";

function HomeBanner() {
  return (
    <section>
      <div className="Banner">
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{
            delay: 5000,  
            disableOnInteraction: false
          }}
          className="mySwiper"
        >
          {BannerSlide.map((authCourse) => (
            <SwiperSlide key={authCourse.id}>
              <div className="Banner-Container">
                <div className="Banner-img">
                  <img src={authCourse.img} alt={authCourse.title} />
                </div>
                <div className="Banner-content">
                  <h1>{authCourse.title}</h1>
                  <p>{authCourse.description}</p>
                  <div className="course-link">
                    <p><Link to="">{authCourse.link}</Link></p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default HomeBanner;
