const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

const courseController = require("../controllers/course");

router.get("/course-card",courseController.getCourseCard)

router.post('/course-home-card',[
  body('title')
    .trim()
    .isLength({max: 78})
    .withMessage("Charcter must be within the 78 Charcter"),
  body('instructor')
    .trim()
    .isLength({max: 78})
    .withMessage("Author name charcter must be within 78"),
  body("price")
    .trim()
    .isLength({max: 5})
    .withMessage("price value must be valid"),
],courseController.HomeCourseCard)


router.get('/course-detail/:courseId',courseController.getCourse)

router.post(
  "/course-creation-form",
  [
    body("title")
      .trim()
      .isLength({ max: 28 })
      .withMessage("Charcter must be within the 28 Charcter"),
    body("courseSub")
      .trim()
      .isLength({ max: 28 })
      .withMessage("subCharacter must be within the 20 Character"),
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
     body("path")
      .notEmpty()
      .withMessage("Path is required"),
    body("filename")
      .notEmpty()
      .withMessage("Filename is required"),
     body("instructor")
      .notEmpty()
      .withMessage("Instructor ID is required"),
  ],
  courseController.CourseCreate
);

module.exports = router;
