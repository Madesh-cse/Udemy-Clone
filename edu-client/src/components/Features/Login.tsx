import '../../styles/Components/_login.scss';
import { NavLink } from 'react-router-dom';
import {  useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function Login({setIsAuthenticated}: {setIsAuthenticated: (value:boolean)=>void}) {

    const navigate = useNavigate()

    const[userLogin,setuserLogin] = useState({
        email:'',
        password:''
    })

    useEffect(()=>{
        const verifedToken = async()=>{
            const token = localStorage.getItem('token');
            if(!token){
                return 
            }

            try{
                await axios.get('http://localhost:8080/auth/verify',{
                    headers:{Authorization:`Bearer ${token}`}
                })
                navigate('/authenticated-home')
            }catch(err){
                localStorage.removeItem('token')
            }
        };
        verifedToken()
    },[navigate])

    const HandleUserLogin = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        try{
            const response = await  axios.post('http://localhost:8080/auth/login',userLogin)
            console.log(response.data)
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("role",response.data.role)
            setuserLogin({
                email:'',
                password:''
            })
            setIsAuthenticated(true)

            const role = response.data.role;

            if(role === 'instructor'){
                navigate('/instructor-dashboard')
            }
            else{
                navigate('/authenticated-home')
            }
        }
        catch(err){
            if(axios.isAxiosError(err)){
                // Give a server error
                console.error(err.response?.data);
                navigate('/login');
            }
        }
    }

  return (
    <section>
        <div className="Login-container">
            <div className='Login-Card'>
                <div className='Login-content'>
                    <h1>Login</h1>
                    <div className='Login-form'>
                        <form action="" onSubmit={HandleUserLogin}>
                            <div className='Email'>
                                <input type="email" name='email' placeholder='Email' value={userLogin.email} onChange={(e)=> setuserLogin({...userLogin, email: e.target.value})} />
                            </div>
                            <div className='Password'>
                                <input type="password" name='password' placeholder='Password' value={userLogin.password}  onChange={(e)=>setuserLogin({...userLogin,password: e.target.value})}/>
                            </div>
                            <button className='Login-btn'type='submit' >Login</button>
                            <div className='Remember-box'>
                                <div className='Remember-input'>
                                    <input type="checkbox" />
                                    <p>Remember Me</p>
                                </div>
                                <div className='Forget-password'>
                                    <NavLink to='/'>Forgot your password</NavLink>
                                </div>
                            </div>
                        </form>
                    </div>
                    <hr className='Login-line' />
                    <div className='Not-Member'>
                       <p>Not a Member Yet?</p>
                       <p className='sign-up-btn'><NavLink to='/SignUp'>Sign up</NavLink></p> 
                    </div>
                </div>
            </div>
        </div>
        <div className='CopyRight'>
            <p className='privacy'>Privacy PolicyTerms of Use</p>
            <p>Copyright © 2025 by Udemy, Inc. - All rights reserved.</p>
        </div>
    </section>
  )
}

export default Login