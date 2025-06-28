import "../../styles/Components/_tabs.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { CoursDataScience } from "../../data/course";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineVerified } from "react-icons/md";
import Rating from "../Features/Rating";

function TabComponent() {
  return (
    <section className="Tabs-box">
      <div className="Tabs-container">
        <h1>All the skills you need in one place</h1>
        <p>
          From critical skills to technical topics, Udemy supports your
          professional development.
        </p>
        <div className="Tabs-content">
          <Tabs>
            <TabList className="tab-flex">
              <Tab>Data Science</Tab>
              <Tab>IT Certification</Tab>
              <Tab>LeaderShip</Tab>
              <Tab>Web Development</Tab>
              <Tab>App Developemnt</Tab>
              <Tab>Business Analytics and Intelligent</Tab>
            </TabList>

            <TabPanel>
              <Tabs>
                <TabList className="tab-flex">
                  {CoursDataScience.map((item) => (
                    <Tab>{item.name}</Tab>
                  ))}
                </TabList>
                {CoursDataScience.map((course) => (
                  <TabPanel key={course.id} className="TabPanel-flex">
                    {course.courses?.map((c, index) => (
                      <div key={index} className="course-card">
                        <img src={c.img} alt="" />
                        <div className="course-description">
                          <h3>{c.title}</h3>
                          <p>{c.author}</p>
                          {/* <p className="review">{c.rating} Rating with {c.totalRate} review</p> */}
                          <Rating value={c.rating} review={c.totalRate}/>
                          <h4><FaIndianRupeeSign/>{c.price}</h4>
                          <p className="Premium"><span><MdOutlineVerified/></span>Premium</p>
                        </div>
                      </div>
                    ))}
                  </TabPanel>
                ))}
                <TabPanel>
                  <h3>Content for Inner Tab A okk</h3>
                  <p>This is the content for the first inner tab. okk</p>
                </TabPanel>
                <TabPanel>
                  <h3>Content for Inner Tab B nice</h3>
                  <p>This is the content for the second inner tab. nice</p>
                </TabPanel>
              </Tabs>
            </TabPanel>
            <TabPanel>
              {/* Nested Tabs */}
              <Tabs>
                <TabList className="tab-flex">
                  <Tab>Inner Tab A</Tab>
                  <Tab>Inner Tab B</Tab>
                </TabList>
                <TabPanel>
                  <h3>Content for Inner Tab A</h3>
                  <p>This is the content for the first inner tab.</p>
                </TabPanel>
                <TabPanel>
                  <h3>Content for Inner Tab B</h3>
                  <p>This is the content for the second inner tab.</p>
                </TabPanel>
              </Tabs>
            </TabPanel>
          </Tabs>
        </div>
        <p className="All-Data-science-course">Show all Data Science courses</p>
      </div>
    </section>
  );
}

export default TabComponent;
