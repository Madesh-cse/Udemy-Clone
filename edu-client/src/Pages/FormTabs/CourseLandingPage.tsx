import "../../styles/Components/Instructor/_coursecreationdashboard.scss";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function CourseLandingPage() {
  let maxChar = 56;

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  const [instructorId, setinstructorId] = useState<string | null>(null);
  const [courseData, setcourseData] = useState({
    title: "",
    author: "",
    courseSub: "",
    description: "",
    price:"",
    language: "",
    level: "",
    catogory: "",
    instructor: "",
  });

  useEffect(() => {
    const id = localStorage.getItem("instructorId");
    if (id) {
      setinstructorId(id);
      setcourseData((prev) => ({ ...prev, instructor: id || "" }));
    }
  }, []);

  // console.log("Instructor Id", instructorId);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setcourseData({ ...courseData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selected = e.target.files[0];
      setImage(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const storedInstructorId = localStorage.getItem("instructorId");

    if (!storedInstructorId) {
      alert("Instructor ID not found. Please log in again.");
      return;
    }

    const course = new FormData();
    Object.entries(courseData).forEach(([Key, value]) => {
      if (Key !== "instructor") {
        course.append(Key, value);
      }
    });

     course.append("instructor", storedInstructorId);

    if (image) {
      course.append("image", image);
    }

    for (let pair of course.entries()) {
      console.log(pair[0], pair[1]);
    }

    try {
      const res = await axios.post(
        "http://localhost:8080/courseCreation/course-creation-form",
        course
      );
      const createCourseId = res.data.courseId;
      localStorage.setItem("courseDetails", createCourseId);
      alert("course created successfully");
      console.log(res.data);
      setcourseData({
        title: "",
        author:"",
        courseSub: "",
        description: "",
        price:"",
        language: "",
        level: "",
        catogory: "",
        instructor: "",
      });
    } catch (err: any) {
      console.error(err.response?.data || err.message);
      alert(err.response?.data?.message || "Course creation failed");
    }
  };

  return (
    <section>
      <div className="Course-Landing-container">
        <div className="Course-Landing-title">
          <h1>Course landing page</h1>
        </div>
        <div className="Course-Landing-content">
          <p>
            Your course landing page is crucial to your success on Udemy. If
            it’s done right, it can also help you gain visibility in search
            engines like Google. As you complete this section, think about
            creating a compelling Course Landing Page that demonstrates why
            someone would want to enroll in your course. Learn more about{" "}
            <Link to="/">creating your course landing page</Link> and{" "}
            <Link to="/"> course title standards</Link>.
          </p>
          <div className="course-landing-form">
            <form action="" onSubmit={handleSubmit}>
              <div className="course-title">
                <label htmlFor="">Course title</label>
                <input
                  type="text"
                  placeholder="title"
                  name="title"
                  value={courseData.title}
                  maxLength={maxChar}
                  onChange={handleChange}
                />
                <p>
                  {courseData.title.length}/{maxChar}
                </p>
                <span>
                  Your title should be a mix of attention-grabbing, informative,
                  and optimized for search
                </span>
              </div>
              <div className="course-title">
                <label htmlFor="">Course Price</label>
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  value={courseData.author}
                  maxLength={maxChar}
                  onChange={handleChange}
                />
                <p>
                  {courseData.author.length}/{maxChar}
                </p>
                <span>
                  Your title should be a mix of attention-grabbing, informative,
                  and optimized for search
                </span>
              </div>
              <div className="course-title">
                <label htmlFor="">Course subtitle</label>
                <input
                  type="text"
                  placeholder="Insert your course subtitle"
                  name="courseSub"
                  value={courseData.courseSub}
                  maxLength={maxChar}
                  onChange={handleChange}
                />
                <p>
                  {courseData.courseSub.length}/{maxChar}
                </p>
                <span>
                  Use 1 or 2 related keywords, and mention 3-4 of the most
                  important areas that you've covered during your course.
                </span>
              </div>
              <div className="course-description">
                <label htmlFor="">Course description</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Insert your course description"
                  value={courseData.description}
                  onChange={handleChange}
                ></textarea>
                <span>Description should have minimum 200 words.</span>
              </div>
              <div className="course-basic-info">
                <label htmlFor="">Basic-info</label>
                <div className="basic-info">
                  <select
                    name="language"
                    id="language"
                    value={courseData.language}
                    onChange={handleChange}
                  >
                    <option value="">-- Select Level --</option>
                    <option value="English">English</option>
                    <option value="ayman ru">ayman ru</option>
                    <option value="French">French</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                  <select
                    name="level"
                    id="level"
                    value={courseData.level}
                    onChange={handleChange}
                  >
                    <option value="">-- Select Level --</option>
                    <option value="Beginner Level">Beginner Level</option>
                    <option value="Intermediate Level">
                      Intermediate Level
                    </option>
                    <option value="Expert">Expert</option>
                    <option value="All Level">All Level</option>
                  </select>
                  <select
                    name="catogory"
                    id="catogory"
                    value={courseData.catogory}
                    onChange={handleChange}
                  >
                    <option value="">-- Select Level --</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App development">App development</option>
                    <option value="BlockChain">BlockChain</option>
                    <option value="AI">Artificial Intelligent</option>
                  </select>
                </div>
              </div>
              <div className="primary-focus">
                <label htmlFor="">
                  What is primarily taught in your course?
                </label>
                <input type="text" name="price" value={courseData.price} onChange={handleChange} placeholder="e.g. 3000"  />
              </div>
              <div className="course-image">
                <div className="course-container">
                  <div className="display-container">
                    <label htmlFor="">Course image</label>
                    {preview ? (
                      <img
                        src={preview}
                        alt="Preview"
                        className="image-preview"
                      />
                    ) : (
                      <img
                        src="https://s.udemycdn.com/course/750x422/placeholder.jpg"
                        alt=""
                      />
                    )}
                  </div>
                  <div className="course-upload">
                    <p>
                      Upload your course image here. It must meet our course
                      image quality standards to be accepted. Important
                      guidelines: 750x422 pixels; .jpg, .jpeg,. gif, or .png. no
                      text on the image.
                    </p>
                    <input
                      type="file"
                      name="image"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseLandingPage;
