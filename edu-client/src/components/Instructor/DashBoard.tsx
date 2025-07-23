import "../../styles/Components/Instructor/_home.scss";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Instructor } from "../../data/course";
function DashBoard() {
  return (
    <section>
      <div className="Instructor">
        <div className="Instructor-container">
          <img
            src="https://s.udemycdn.com/teaching/billboard-desktop-2x-v4.jpg"
            alt=""
          />
          <div className="Instructor-title">
            <h1>
              Come <br /> teach with <br /> us
            </h1>
            <p>
              Become an instructor and change lives <br /> — including your own
            </p>
            <Link to="/course-creation-form">
              {" "}
              <span>Get started</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="Instructor-Slider">
        <div className="slider">
          <h1>So many reasons to start</h1>
          <div className="Instructor-content-slider">
            <div className="Instructor-card">
              <img
                src="https://s.udemycdn.com/teaching/value-prop-teach-2x-v3.jpg"
                alt=""
              />
              <div className="Instructor-content">
                <h3>Teach your way</h3>
                <p>
                  Publish the course you want, in the way you <br /> want and
                  always have control of <br /> your own content.
                </p>
              </div>
            </div>
            <div className="Instructor-card">
              <img
                src="https://s.udemycdn.com/teaching/value-prop-inspire-2x-v3.jpg"
                alt=""
              />
              <div className="Instructor-content">
                <h3>Teach your way</h3>
                <p>
                  Teach what you know and help learners explore <br /> their
                  interests, gain new skills, and advance <br /> their careers.
                </p>
              </div>
            </div>
            <div className="Instructor-card">
              <img
                src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-2x-v3.jpg"
                alt=""
              />
              <div className="Instructor-content">
                <h3>Teach your way</h3>
                <p>
                  Expand your professional network, build your <br /> expertise,
                  and earn money on each paid <br />
                  enrollment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Student-Count">
        <div className="Student-Count-Content">
          <ul>
            <li>
              <p>80M</p>
              <span>Students</span>
            </li>
            <li>
              <p>75+</p>
              <span>Languages</span>
            </li>
            <li>
              <p>1.1B</p>
              <span>Enrollments</span>
            </li>
            <li>
              <p>180+</p>
              <span>Countries</span>
            </li>
            <li>
              <p>17,200+</p>
              <span>Enterprise customers</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="Instructor-tabs">
        <div className="Tabs-container">
          <h1>How to begin</h1>
          <div className="Tab-content">
            <Tabs>
              <TabList className="tab-flex">
                <Tab>Plan your curriculam</Tab>
                <Tab>Record your video</Tab>
                <Tab>Lanuch your course</Tab>
              </TabList>
              <TabPanel>
                <div className="tabs-course-content">
                  <div className="content-1">
                    <p>
                      You start with your passion and knowledge. Then choose a
                      promising topic with the help of our Marketplace Insights
                      tool.
                    </p>
                    <p>
                      The way that you teach — what you bring to it — is up to
                      you.
                    </p>
                    <div className="content-how-help">
                      <h3>How we help you</h3>
                      <p>
                        We offer plenty of resources on how to create your first
                        course. And, our instructor dashboard and curriculum
                        pages help keep you organized.
                      </p>
                    </div>
                  </div>
                  <div className="content-img">
                    <img
                      src="https://s.udemycdn.com/teaching/plan-your-curriculum-2x-v3.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tabs-course-content">
                  <div className="content-1">
                    <p>
                      Use basic tools like a smartphone or a DSLR camera. Add a
                      good microphone and you’re ready to start.
                    </p>
                    <p>
                      If you don’t like being on camera, just capture your
                      screen. Either way, we recommend two hours or more of
                      video for a paid course.
                    </p>
                    <div className="content-how-help">
                      <h3>How we help you</h3>
                      <p>
                        Our support team is available to help you throughout the
                        process and provide feedback on test videos.
                      </p>
                    </div>
                  </div>
                  <div className="content-img">
                    <img
                      src="https://s.udemycdn.com/teaching/record-your-video-2x-v3.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="tabs-course-content">
                  <div className="content-1">
                    <p>
                      Gather your first ratings and reviews by promoting your
                      course through social media and your professional
                      networks.
                    </p>
                    <p>
                      Your course will be discoverable in our marketplace where
                      you earn revenue from each paid enrollment.
                    </p>
                    <div className="content-how-help">
                      <h3>How we help you</h3>
                      <p>
                        Our custom coupon tool lets you offer enrollment
                        incentives while our global promotions drive traffic to
                        courses. There’s even more opportunity for courses
                        chosen for Udemy Business.
                      </p>
                    </div>
                  </div>
                  <div className="content-img">
                    <img
                      src="https://s.udemycdn.com/teaching/launch-your-course-2x-v3.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
      <div className="Instrcutor-slider-card">
        <div className="Instructor-slider-container">
          <Swiper
            navigation={true}
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {Instructor.map((items) => (
              <SwiperSlide key={items.id}>
                <div className="Instructor-banner-slider">
                  <div className="Instructor-banner-image">
                    <img src={items.image} alt="" />
                  </div>
                  <div className="Instructor-banner-content">
                    <p>{items.description}</p>
                    <div className="Instructor-author">
                        <h4>{items.author}</h4>
                        <p className="instructor-edu">{items.Education}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="Instructor-extra-detail">
        <div className="Instructor-extra-content">
          <div className="Instructor-extra-image-1">
            <img
              src="https://s.udemycdn.com/teaching/support-1-2x-v3.jpg"
              alt=""
            />
          </div>
          <div className="Instructor-extra-values">
            <h1>You won’t have to do it alone</h1>
            <p>
              Our <strong>Instructor Support</strong> Team is here to answer
              your questions and review <br />
              your test video, while our <strong>Teaching Center</strong>  gives you plenty of
              resources tohelp you through the process. Plus, get the support of
              experienced <br /> instructors in our <strong>online community.</strong> 
            </p>
          </div>
          <div className="Instructor-extra-image-2">
            <img
              src="https://s.udemycdn.com/teaching/support-2-2x-v3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="Get-started">
         <div className="Get-started-container">
            <h1>Become an instructor today</h1>
            <p>Join one of the world’s largest online learning <br /> marketplaces.</p>
             <Link to="/">
              {" "}
              <span>Get started</span>
            </Link>
         </div>
      </div>
    </section>
  );
}

export default DashBoard;
