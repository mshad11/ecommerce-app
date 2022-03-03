import React from "react";
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
function Login(){
    const[singup, setsignup] = useState(false)
    const  setToggle = () =>{
        setsignup(!singup)
    }
    return(
        <div id ="loginpage">
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2 className=" home-title text-center">Welcome to Login page</h2>
                 </div>
                 {!singup ? (<div className="login-wrapper">
                    <h2 className="text-center">Login</h2>
                 
                  <div className="input-group">
                  <input type="text" className="form-control" placeholder="username" id="username"/>
                  </div>
                  <div className="input-group">
                  <input type="password" className="form-control" placeholder="password" id="password" />
                  </div>
                  <div>
                  <input type="submit" className="form-control btn btn-primary" value = "Login as user" />
                  </div>
                 
                 <div className="sign-up btn text-center text-info" onClick={setToggle}>Dont have an account? Signup
                    
                    </div>
                    <div className="auth-error-msg text-danger text-center"> </div>
                   </div>):(<div className="login-wrapper">
                    <h2 className="text-center">Signup</h2>
                 
                  <div className="input-group">
                  <input type="text" className="form-control shahid" placeholder="username" id="username"/>
                  </div>
                  <div className="input-group">
                  <input type="password" className="form-control" placeholder="password" id="password" />
                  </div>
                  <div>
                  <input type="submit" className="form-control btn btn-primary" value = "Signup as user" />
                  </div>
                 
                 <div className="sign-up btn text-center text-info" onClick={setToggle}> Already have an account? Login
                    
                    </div>
                    <div className="auth-error-msg text-danger text-center"> 
                    </div>
                   </div> 
                   )}

              </div>
               </div>
                  
             </div>  







    )
}
export default Login;