import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
function HomeCourseCard() {
  let maxChar = 78;

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>("");

  const [instructorId, setinstructorId] = useState<string | null>(null);
  const [couseCardData, setcourseCardData] = useState({
    title: "",
    author: "",
    price: "",
    instructor: "",
  });

  useEffect(() => {
    const id = localStorage.getItem("instructorId");
    if (id) {
      setinstructorId(id);
      setcourseCardData((prev) => ({ ...prev, instructor: id || "" }));
    }
  }, []);

//   console.log("Instructor Id", instructorId);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcourseCardData({ ...couseCardData, [e.target.name]: e.target.value });
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
    Object.entries(couseCardData).forEach(([Key, value]) => {
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

    try{
        const res = await axios.post("http://localhost:8080/courseCreation/course-home-card",course);
        alert("course created successfully");
        console.log(res.data);
        setcourseCardData({
        title: "",
        author:"",
        price:"",
        instructor: "",
      });
    }
    catch(err:any){
        console.error(err.response?.data || err.message);
        alert(err.response?.data?.message || "Course creation failed");
    }
  };

  return (
    <section>
      <div className="Course-Landing-container">
        <div className="Course-Landing-title">
          <h1>Course Home Page</h1>
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
                <input type="text" placeholder="title" name="title" value={couseCardData.title} maxLength={maxChar} onChange={handleChange}/>
                <p>{couseCardData.title.length}/{maxChar}</p>
                <span>
                  Your title should be a mix of attention-grabbing, informative,
                  and optimized for search
                </span>
              </div>
              <div className="course-title">
                <label htmlFor="">Course Instrctor</label>
                <input
                  type="text"
                  placeholder="Insert your course subtitle"
                  name="author"
                  value={couseCardData.author}
                  maxLength={maxChar}
                  onChange={handleChange}
                />
                <p> {couseCardData.author.length}/{maxChar}</p>
                <span>
                  Use 1 or 2 related keywords, and mention 3-4 of the most
                  important areas that you've covered during your course.
                </span>
              </div>
              <div className="primary-focus">
                <label htmlFor="">
                  What is primarily cost of course taught in the udemy?
                </label>
                <input type="text" placeholder="e.g. course price" name="price" value={couseCardData.price} onChange={handleChange} />
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
                    <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
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

export default HomeCourseCard;
