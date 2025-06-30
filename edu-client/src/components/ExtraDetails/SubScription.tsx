import { NavLink } from 'react-router-dom';
import '../../styles/Components/_subscription.scss'
import { RiContactsFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import { GoVerified } from "react-icons/go";
function SubScription() {
  return (
    <section>
        <div className="subscription-container">
            <div className="subscription-title">
                <h1>Accelerate growth — for you or your organization</h1>
                <p>Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.</p>
            </div>
            <div className='subscription-plan'>
                <div className='subscription-card'>
                    <div className='border-color'></div>
                    <div className='subscription-first-content'>
                        <h1>Personal Plan</h1>
                        <p className='member'>For you</p>
                        <p> <span><RiContactsFill/></span> Individual</p>
                    </div>
                    <div className='subscription-second-content'>
                        <h2>Starting at ₹500 per month</h2>
                        <p>Billed monthly or annually. Cancel anytime.</p>
                        <div className='subscription-btn'>
                            <p><NavLink to='/subscription'>Start subscription</NavLink> <span><FaArrowRight/></span></p>
                        </div>
                    </div>
                    <div className='subscription-third-content'>
                        <ul>
                            <li><span><GoVerified/></span>Access to 26,000+ top courses</li>
                            <li><span><GoVerified/></span>Certification prep</li>
                            <li><span><GoVerified/></span>Goal-focused recommendations</li>
                            <li><span><GoVerified/></span>AI-powered coding exercises</li>
                        </ul>
                    </div>
                </div>
                <div className='subscription-card'>
                    <div className='border-color'></div>
                    <div className='subscription-first-content'>
                        <h1>Team Plan</h1>
                        <p>For your team</p>
                        <p> <span><RiContactsFill/></span> 2 to 20 people</p>
                    </div>
                    <div className='subscription-second-content'>
                        <h2>₹2,000 a month per user</h2>
                        <p>Billed monthly or annually. Cancel anytime.</p>
                        <div className='subscription-btn'>
                            <p><NavLink to='/subscription'>Start subscription</NavLink> <span><FaArrowRight/></span></p>
                        </div>
                    </div>
                    <div className='subscription-third-content'>
                        <ul>
                            <li><span><GoVerified/></span>Access to 26,000+ top courses</li>
                            <li><span><GoVerified/></span>Certification prep</li>
                            <li><span><GoVerified/></span>Goal-focused recommendations</li>
                            <li><span><GoVerified/></span>AI-powered coding exercises</li>
                            <li><span><GoVerified/></span>Certification prep</li>
                            <li><span><GoVerified/></span>Goal-focused recommendations</li>
                            <li><span><GoVerified/></span>AI-powered coding exercises</li>
                        </ul>
                    </div>
                </div>
                <div className='subscription-card'>
                    <div className='border-color'></div>
                    <div className='subscription-first-content'>
                        <h1>Enterprise Plan</h1>
                        <p>For your whole organization</p>
                        <p> <span><RiContactsFill/></span> More than 20 people</p>
                    </div>
                    <div className='subscription-second-content'>
                        <h2>Contact sales for pricing</h2>
                        <p>Billed monthly or annually. Cancel anytime.</p>
                        <div className='subscription-btn'>
                            <p><NavLink to='/subscription'>Request a demo</NavLink> <span><FaArrowRight/></span></p>
                        </div>
                    </div>
                    <div className='subscription-third-content'>
                        <ul>
                            <li><span><GoVerified/></span>Access to 26,000+ top courses</li>
                            <li><span><GoVerified/></span>Certification prep</li>
                            <li><span><GoVerified/></span>Goal-focused recommendations</li>
                            <li><span><GoVerified/></span>AI-powered coding exercises</li>
                            <li><span><GoVerified/></span>Access to 26,000+ top courses</li>
                            <li><span><GoVerified/></span>Certification prep</li>
                            <li><span><GoVerified/></span>Goal-focused recommendations</li>
                            <li><span><GoVerified/></span>AI-powered coding exercises</li>
                            <li><span><GoVerified/></span>Goal-focused recommendations</li>
                            <li><span><GoVerified/></span>AI-powered coding exercises</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SubScription