import React from 'react';
import UserImg from '../assets/image.png';
import EmailImg from '../assets/email.png';
import PasswordImg from '../assets/password.png';


const LoginSignup = () => {
    return (
        <div className='container'>
          <div className="header">
            <div className="text">Sign Up</div>
            <div className='underline'></div>
            </div>  
            <div className="inputs">
             <div className="input">
               <img src={UserImg} alt="" />
               <input type="text" />
             </div>
            <div className="input">
               <img src={EmailImg} alt="" />
               <input type="email" /> 
            </div>
            <div className="input">
                <img src={PasswordImg} alt="" />
                <input type="password" />
            </div> 
            </div>
        </div>
    )
}
export default LoginSignup;