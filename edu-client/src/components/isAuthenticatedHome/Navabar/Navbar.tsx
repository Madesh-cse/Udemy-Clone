import '../../../styles/Components/_navbar.scss'
import { NavLink } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";

function AuthNavbar({setIsAuthenticated}: {setIsAuthenticated:(value:boolean)=>void}) {
    const navigate = useNavigate()
    const handleLogout = ()=>{
        localStorage.removeItem("token")
        setIsAuthenticated(false)
        navigate('/login')

    }
  return (
    <header>
        <nav>
            <div className='navbar'>
                <NavLink to='/authenticated-home'><img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="Udemy-Logo" /></NavLink>
                <div className='nav-list'>
                    <NavLink to='/explore'>Explore</NavLink>
                    <input type="text" placeholder='Search for Anything' />
                    <span><CiSearch/></span>
                </div>
                <div className='nav-list-item'>
                    <ul>
                        <li><NavLink to='/plan-pricing'>Udemy Business</NavLink></li>
                        <li><NavLink to='/Udemy Business'>Instructor</NavLink></li>
                        <li><NavLink to='/Tech on Udemy'>My learning</NavLink></li>
                        <li><NavLink to=''><span><CiHeart/></span></NavLink></li>
                        <li className='Cart'><NavLink to='/cart'><span><IoCartOutline/></span></NavLink></li>
                        <li><NavLink to=''><span><CiBellOn/></span></NavLink></li>
                    </ul>
                </div>
                <div>
                    <button onClick={handleLogout}>LogOut</button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default AuthNavbar