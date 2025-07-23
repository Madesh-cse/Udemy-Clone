import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface CourseDetails {
  _id: string;
  title: string;
  courseSub: string;
  description: string;
  language: string;
  level: string;
  catogory: string;
  path: string;
  filename: string;
}

function CourseDetails() {
  const { courseId } = useParams();
  const [course, setCourse] = useState<CourseDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  console.log("Course ID:", courseId);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8080/coursecreation/course-detail/${courseId}`
        );
        setCourse(res.data.courseDetails);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching course details:", err);
        setError("Failed to load course details.");
        setLoading(false);
      }
    };

    fetchCourseDetails();
  }, [courseId]);

  if (loading) return <p>Loading course details...</p>;
  if (error) return <p>{error}</p>;
  if (!course) return <p>No course found.</p>;

  return (
    <div className="course-details" style={{ padding: "20px" }}>
      <h1>{course.title}</h1>
      <img
        src={`http://localhost:8080/${course.path}`}
        alt={course.title}
        style={{ maxWidth: "600px", borderRadius: "8px", marginBottom: "20px" }}
      />
      <p><strong>Category:</strong> {course.catogory}</p>
      <p><strong>Subject:</strong> {course.courseSub}</p>
      <p><strong>Language:</strong> {course.language}</p>
      <p><strong>Level:</strong> {course.level}</p>
      <p><strong>Description:</strong> {course.description}</p>
    </div>
  );
}

export default CourseDetails;
