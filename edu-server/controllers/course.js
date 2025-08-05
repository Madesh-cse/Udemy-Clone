const { validationResult } = require("express-validator");
const Course = require("../model/course");
const coursecard = require("../model/coursecard");
const CourseInstruction = require("../model/courseInstruction")

exports.CourseCreate = async (req, res, next) => {
  const title = req.body.title;
  const courseSub = req.body.courseSub;
  const description = req.body.description;
  const language = req.body.language;
  const level = req.body.level;
  const catogory = req.body.catogory;
  const instructorId = req.body.instructor;

  console.log("Image path:", req.file?.path);
  console.log("Instructor ID:", instructorId);
  console.log("All body fields:", req.body);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "validation Failed",
      errors: errors.array(),
    });
  }

  if (!req.file) {
    return res.status(422).json({
      message: "Validation failed",
      errors: [{ msg: "Image is required", path: "image", location: "file" }],
    });
  }

  const path = req.file.path;
  const filename = req.file.filename;

  try {
    const course = new Course({
      title,
      courseSub,
      description,
      language,
      level,
      catogory,
      path,
      filename,
      instructor: instructorId,
    });

    const result = await course.save();

    console.log("Saved Course ID:", result._id);

    res.status(201).json({
      message: " Instructor Course is created sucssefully",
      courseId: result._id,
      imageUrl: `${req.protocol}://${req.get("host")}/${path}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Something went wrong on the server",
      error: err.message,
    });
  }
};

exports.getCourse = async (req, res) => {
  try {
    const { courseCardId } = req.params;

    const courseCard = await coursecard
      .findById(courseCardId)
      .populate({ 
        path: "courseDetails",
        populate: [
          { path: "instructor", select: "name email" },
          {path: "courseInstruction"}
        ] 
      });

    if (!courseCard || !courseCard.courseDetails) {
      return res.status(404).json({ message: "Course details not found" });
    }

    const course = courseCard.courseDetails;

    res.status(200).json({
      message: "Course data fetched successfully",
      course: {
        _id: course._id,
        title: course.title,
        courseSub: course.courseSub,
        description: course.description,
        language: course.language,
        level: course.level,
        catogory: course.catogory,
        instructor: course.instructor,
        imageUrl: `${req.protocol}://${req.get("host")}/${course.path}`,
        filename: course.filename,
        courseInstruction : course.courseInstruction,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to fetch course detail",
      error: err.message,
    });
  }
};


exports.getCourseCard = async (req, res) => {
  try {
    const courseCards = await coursecard.find()
      .populate("instructor", "name email") 

    res.status(200).json({
      message: "Fetched course cards",
      courseCard: courseCards,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.HomeCourseCard = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: "Validation failed",
      errors: errors.array(),
    });
  }

  if (!req.file) {
    return res.status(422).json({
      message: "Validation failed",
      errors: [{ msg: "Image is required", path: "image", location: "file" }],
    });
  }

  const { title, author, price, instructor,courseDetails } = req.body;
  const { path, filename } = req.file;

  try {
    const discountedPrice = Math.round(price * 0.5);
    const courseCard = new coursecard({
      title,
      author,
      price,
      filename,
      path,
      instructor,
      currentPrice: discountedPrice,
      courseDetails
    });

    const result = await courseCard.save();

    res.status(201).json({
      message: "Instructor CourseCard created successfully",
      courseCardId: result._id,
      imageUrl: `${req.protocol}://${req.get("host")}/${path}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Something went wrong on the server",
      error: err.message,
    });
  }
};

  exports.CourseInstruction = async (req,res,next)=>{
  
    const errors = validationResult(req);

    if(!errors.isEmpty()){
      return res.status(422).json({
        message:'Validation Failed',
        errors: errors.array()
      })
    }

    const role = req.body.role;
    const Budget = req.body.Budget;
    const ProjectRisk = req.body.ProjectRisk;
    const CaseStudy = req.body.CaseStudy;
    const Requirement = req.body.Requirement;
    const AboutCourse = req.body.AboutCourse;
    const courseDetailId = req.body.courseDetailId;

    try{
      const courseInstruction = new CourseInstruction({
        role,
        Budget,
        ProjectRisk,
        CaseStudy,
        Requirement,
        AboutCourse
      })

      const saveCourseInstruction = await courseInstruction.save();

    const updatedCourse =  await Course.findByIdAndUpdate(courseDetailId,{
        courseInstruction: saveCourseInstruction._id
      })
      res.status(201).json({ message: "Instruction added and linked",instruction: saveCourseInstruction, course: updatedCourse });
    }
    catch(err){
      res.status(500).json({ message: "Error linking instruction", error: err.message });
    }
  }
