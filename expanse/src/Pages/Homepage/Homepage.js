import React from 'react'
import About from './Components/About/About'
import Landing from './Components/Landing/Landing'
import Time from './Components/Landing/Time'
import Schedule from './Components/Schedule/Schedule'
import Themes from './Components/Themes/Themes'

export default function Homepage() {
  return (
    <div>
      <Landing/>
      <Time/>
      <About/>
      <Themes/>
      <Schedule/>
    </div>
  )
}
