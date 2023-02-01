import React from 'react'
import "./Landing.css"
import { Outlet, Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className='te-landing'>
        <h1 className='te-heading'>THE EXPANSE 2.0</h1>
        <Link to="/" className='te-landing-register'>Register</Link>
    </div>
  )
}
