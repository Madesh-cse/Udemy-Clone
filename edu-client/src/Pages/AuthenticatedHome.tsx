import DropDown from "../components/isAuthenticatedHome/Navabar/DropDown"
import HomeBanner from "../components/isAuthenticatedHome/AdBanner/HomeBanner"
import { Recommended } from "../data/AuthCourse"
import { JavaCourse } from "../data/JavaCourse"
import CourseSlider from "../components/isAuthenticatedHome/AuthCourseSlider/CourseSlider"
import { NodeJs } from "../data/nodeJs"
import { WebDevelopers } from "../data/nodeJs"
import TopPick from "../components/CourseCard/TopPick"
import Footer from "../components/Footer/Footer"
function AuthenticatedHome() {
  return (
    <>
     <header>
        <DropDown/>
    </header>
    <main>
      <HomeBanner/>
      <CourseSlider title="Recommended for you" courses={Recommended} />
      <CourseSlider title="Java" courses={JavaCourse} />
      <CourseSlider title="The Complete Node.js Developer Course" courses={NodeJs} />
      <CourseSlider title="Popular for Web Developers" courses={WebDevelopers} />
      <TopPick/>
    </main>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default AuthenticatedHome