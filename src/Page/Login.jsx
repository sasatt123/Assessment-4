import React from 'react'


const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
        <span className="Logo">Chismis</span>
        <span className="Title">Log in for Chismis updates</span>
        <form>
            <input type="Username" placeholder="Enter Username"/>
            <input type="Password" placeholder="Enter Password"/>

            <button>Sign in</button>
            
        </form>
        <p>Sign up for Chismis? Register</p>
        </div>
    </div>
    
  )
}

export default Login;