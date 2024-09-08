import React from 'react';
import './LoginForm.css';
import { FaUser,FaLock  } from "react-icons/fa";
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [log, setlog] = useState({ phone: '', password: '' })
    const login =async(phone , password)=>{
        const response = await fetch(`http://localhost:8000/user/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phone , password }),
        });
        const json = await response.json()
        setlog({phone : '' , password : ""});
        if(!json.error){
          localStorage.setItem("token" , json.authtoken);
        }else{
          return true;
        }
    }
    const navigate = useNavigate();
    const handleClick = async(e) => {
        e.preventDefault()
        const res = await login(log.phone, log.password);
        if(!res){
            toast("User Login successfully!!");
            navigate('/');
        }else{
            toast("user does not exist");
        }
      }
    

    const handleChange = (e) => {
        setlog({...log , [e.target.name] : e.target.value})
    }

    return(
        <div class="login-page">
            <div className='wrapper'>
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="tel" placeholder='Phone number' required name="phone" onChange={handleChange}/>
                    <FaUser  className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required name="password" onChange={handleChange}/>
                    <FaLock className='icon' />
                </div>

                {/* <div className="remember-forgot">
                    <label><input type="checkbox"/>Remember Me</label>
                    <a >Forgot Password</a>
                </div> */}

                <button type='submit' onClick={handleClick}>Login</button>

                {/* <div className="register-link">
                    <p>Don't Have an Account? <a >Register</a></p>
                </div> */}
            </form>
            </div>
        </div>
    );
};

export default LoginForm