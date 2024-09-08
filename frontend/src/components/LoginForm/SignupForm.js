import React from 'react';
import { useState  } from 'react';
import './SignupForm.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const SignupForm = () => {
    
    const [sign, setsign] = useState({ user: '', phone: '', password: '' })

    const signin =async(user , phone , Password)=>{
        const response = await fetch(`http://localhost:8000/user/signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({username: user, phone : phone ,password: Password }),
        });
        const json = await response.json()
        if (response.ok) {
            localStorage.setItem("token", json.authtoken);
            return null; // Signifies successful signup
          } else if (json.error) {
            return json.show ? "unvalid" : "invalid"; // Differentiates between cases
          }
    }
    const nevigate = useNavigate();
    const handleClick = async(e) => {
        e.preventDefault()
          const res =   await signin(sign.user , sign.phone , sign.password);
          setsign({ user: '', phone: '', password: '' })
          console.log(res);
          if (res === null) {
            toast("User signup successfully!!");
            nevigate('/');
          } else if (res === "unvalid") {
            toast("User with the same email already exists");
          }
    }
    const handleChange = (e) => {
        setsign({ ...sign, [e.target.name]: e.target.value })
    }

    return (
        <>

        <div className='signup-page'>
        <div className='wrapper'>
            <form action="">
                <h1>Sign Up</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' name="user" required onChange={handleChange}/>
                    <FaUser className='icon' />
                </div>
                <div className="input-box">
                    <input type="tel" placeholder='Phone Number' name="phone" required onChange={handleChange}/>
                    <FaEnvelope className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' name="password" required onChange={handleChange}/>
                    <FaLock className='icon' />
                </div>
                <button type='submit' onClick={handleClick}>Sign Up</button>
                {/* <div className="login-link">
                    <p>Already have an account? <a href="#">Login</a></p>
                </div> */}
            </form>
            </div>
            </div>
        </>
    );
};

export default SignupForm;
