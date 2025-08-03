const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const courseController = require("../controllers/course");

router.get("/course-card", courseController.getCourseCard);

router.post(
  "/course-home-card",
  [
    body("title")
      .trim()
      .isLength({ max: 78 })
      .withMessage("Charcter must be within the 78 Charcter"),
    body("author")
      .trim()
      .isLength({ max: 78 })
      .withMessage("Author name character must be within 78"),
    body("price")
      .trim()
      .isLength({ max: 5 })
      .withMessage("Price value must be valid"),
    body("instructor").notEmpty().withMessage("Instructor is required"),
    body("courseDetails")
      .notEmpty()
      .withMessage("CourseDetails ID is required"),
  ],
  courseController.HomeCourseCard
);

router.get("/course-detail/:courseCardId", courseController.getCourse);

router.post(
  "/course-creation-form",
  [
    body("title")
      .trim()
      .isLength({ max: 56 })
      .withMessage("Charcter must be within the 56 Charcter"),
    body("courseSub")
      .trim()
      .isLength({ max: 56 })
      .withMessage("subCharacter must be within the 56 Character"),
    body("description")
      .trim()
      .isLength({ max: 200 })
      .withMessage("Description must be within the 200 Character"),
    body("language")
      .notEmpty()
      .withMessage("Select the Language")
      .isIn(["English", "Hindi", "French", "aymur"])
      .withMessage("Invalid language is selected"),
    body("level")
      .notEmpty()
      .withMessage("Select the level")
      .isIn(["Beginner Level", "Intermediate Level", "Expert", "All Level"])
      .withMessage("Invalid level is selected"),
    body("catogory")
      .notEmpty()
      .withMessage("Select the catogory")
      .isIn(["Web Development", " App Development ", "BlockChain", "AI"])
      .withMessage("Invalid language is selected"),
    body("instructor").notEmpty().withMessage("Instructor ID is required"),
  ],
  courseController.CourseCreate
);

module.exports = router;
