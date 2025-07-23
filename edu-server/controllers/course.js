const { validationResult } = require("express-validator");
const Course = require("../model/course");
const coursecard = require("../model/coursecard");

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

exports.getCourse = async (req, res, next) => {
  try {
    const { courseId } = req.params;

    const course = await Course.findById(courseId).populate(
      "instructor",
      "name email"
    );
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ message: "Course data fetch successfully", course });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch courses", error: err.message });
  }
};

exports.getCourseCard = async (req, res, next) => {
  try {
    const courseCards = await coursecard
      .find()
      .populate("instructor", "name email");

    const updatedCards = courseCards.map((course) => {
      const now = new Date();
      const createdAt = new Date(course.createdAt);
      const elapsedMs = now - createdAt;

      const cycleDurationMs = 4 * 60 * 1000; // 4 minutes
      const visibleStartMs = 2 * 60 * 1000; // starts showing at 2 min
      const visibleEndMs = 4 * 60 * 1000; // ends at 4 min

      const cycleMs = elapsedMs % cycleDurationMs;
      const isDiscountVisible =
        cycleMs >= visibleStartMs && cycleMs < visibleEndMs;

      const originalPrice = course.price;
      const discountedPrice = Math.round(originalPrice * 0.5);

      return {
        ...course.toObject(),
        originalPrice,
        discountedPrice,
        currentPrice: isDiscountVisible ? discountedPrice : null,
        discountPercent: isDiscountVisible ? 50 : null,
        discountVisible: isDiscountVisible,
      };
    });

    res.status(200).json({
      message: "CourseCard data fetched successfully",
      courseCard: updatedCards,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch courses", error: err.message });
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

  const { title, author, price, instructor, courseDetailsId } = req.body;
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
      courseDetailsId,
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
