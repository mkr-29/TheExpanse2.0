import React from 'react'
import "./Landing.css"
import { Outlet, Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className='te-landing'>
        <h1 className='te-heading'>THE EXPANSE <span>2.0</span></h1>
        <Link to="/" className='te-landing-register'>Register</Link>
    </div>
  )
}
