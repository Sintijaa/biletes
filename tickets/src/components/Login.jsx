import React, { useState } from 'react';
import '../style/Login.css';

function Login() {
  const [action, setAction] = useState("SignUp");
  return (
    
    <div className='container'>
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
      {action === "SignUp" ? (
  <div className="input">
  
  </div>
) : null}   
        <div className="input">
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" />
        </div>
        
      </div>
      {action === "Signup" ? null : <div className="forgot-password">Lost password? <span>Click here!</span></div>}
      <div className="submit-conatiner">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Signup") }}>Sign up</div>
        <div className={action === "Signup" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
      </div> 
    </div>
  );
}

export default Login;
