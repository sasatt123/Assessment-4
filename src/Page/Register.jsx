import React from 'react'
import Add from "../img/add avatar.png"

const Register = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
        <span className="Logo">Chismis</span>
        <span className="Title">Create a new account</span>
        <form>
            <input type="Username" placeholder="Enter Username"/>
            <input type="Email" placeholder="Enter Email"/>
            <input type="Password" placeholder="Enter Password"/>
            <input style={{display:"none"}} type="File" id="file"/>
            <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
            </label>
            <button>Sign up</button>
            
        </form>
        <p>Already Register? Login</p>
        </div>
    </div>
    
  )
}

export default Register;