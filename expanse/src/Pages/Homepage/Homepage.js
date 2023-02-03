import React from 'react'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Landing from './Components/Landing/Landing'
import Time from './Components/Landing/Time'
import Schedule from './Components/Schedule/Schedule'
import Themes from './Components/Themes/Themes'
import "./Homepage.css"

export default function Homepage() {
  return (
    <div>
      <Landing/>
      <Time/>
      <About/>
      <Themes/>
      <Schedule/>
      <Footer className="footer-exp" />
    </div>
  )
}
