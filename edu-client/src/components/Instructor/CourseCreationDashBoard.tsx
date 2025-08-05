import "../../styles/Components/Instructor/_coursecreationdashboard.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import CourseLandingPage from "../../Pages/FormTabs/CourseLandingPage";
import PricingPage from "../../Pages/FormTabs/PricingPage";
import HomeCourseCard from "../../Pages/FormTabs/HomeCourseCard";
import IntendedLeaners from "../../Pages/FormTabs/IntendedLeaners";
function CourseCreationDashBoard() {
  return (
    <section>
      <div className="course-container">
        <Tabs>
          <div className="course-container-layout">
            <div className="course-list-type">
              <TabList className="custom-tab-list">
                <div>
                  <h3>Publish your course</h3>
                  <Tab>
                    <span>
                      <input type="radio" readOnly checked />
                    </span>{" "}
                    Course landing page
                  </Tab>
                  <Tab>
                    <span>
                      <input type="radio" readOnly />
                    </span>{" "}
                    Pricing
                  </Tab>
                  <Tab>
                    <span>
                      <input type="radio" readOnly />
                    </span>{" "}
                    Intended learners
                  </Tab>
                  <Tab>
                    <span>
                      <input type="radio" readOnly />
                    </span>{" "}
                    Course messages
                  </Tab>
                </div>
                <div>
                  <h3>Create your content</h3>
                  <Tab>
                    <span>
                      <input type="radio" readOnly />
                    </span>{" "}
                    Basic Info
                  </Tab>
                  <Tab>
                    <span>
                      <input type="radio" readOnly />
                    </span>{" "}
                    Curriculum
                  </Tab>
                  <Tab>
                    <span>
                      <input type="radio" readOnly />
                    </span>{" "}
                    Pricing
                  </Tab>
                </div>
                <div>
                  <h3>Plan your course</h3>
                  <Tab>
                    <span>
                      <input type="radio" readOnly />
                    </span>{" "}
                    Basic Info
                  </Tab>
                  <Tab>
                    <span>
                      <input type="radio" readOnly />
                    </span>{" "}
                    Curriculum
                  </Tab>
                  <Tab>
                    <span>
                      <input type="radio" readOnly />
                    </span>{" "}
                    Pricing
                  </Tab>
                </div>
              </TabList>

              <button>Submit for Review</button>
            </div>
            <div className="course-list-form">
              <TabPanel>
                <CourseLandingPage />
              </TabPanel>
              <TabPanel>
                <PricingPage />
              </TabPanel>
              <TabPanel>
                <IntendedLeaners/>
              </TabPanel>
               <TabPanel>
                <HomeCourseCard />
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
}

export default CourseCreationDashBoard;
