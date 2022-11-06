import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

export default function Log() {

    return (
    <div className='login-contener'>
        <h1>Login</h1>
        <form className='login-El'>
        <label>Email </label>
        <input type={"email"} placeholder=" Enter your eamil "></input>
       <label>Password</label>
        <input type={"password"} placeholder=" Enter your Password"></input>
        
        
        </form>
      <Link to="/Card"><button width="10">Login</button></Link>  
    </div>
  )
}
