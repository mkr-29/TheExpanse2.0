import React from 'react'
import SchCard from './SchCard'
import "./Schedule.css"
import Orn5 from "./Assets/orn5.svg"
import Orn6 from "./Assets/orn6.svg"
import Orn7 from "./Assets/orn7.svg"
import Orn8 from "./Assets/orn8.svg"

export default function Schedule() {
  return (
    <div className='sc-expsection'>
        <div className='sc-ornaments'>
            {/* <img src={Orn5} className='orn-5'/> */}
            <img src={Orn6} className='orn-6'/>
            <img src={Orn7} className='orn-7'/>
            {/* <img src={Orn8} className='orn-8'/> */}
        </div>
        <h1 className='sc-expanse'>Schedule</h1>
        <div className='sc-tcards'>
        <SchCard
            stime="11:00am"
            etime="12:00pm"
            ename="Innaugration"
        />
        <SchCard
            stime="11:00am"
            etime="12:00pm"
            ename="Design and Development"
        />
        <SchCard
            stime="11:00am"
            etime="12:00pm"
            ename="Mid Evaluation"
        />
        <SchCard
            stime="11:00am"
            etime="12:00pm"
            ename="Results"
        />
        </div>
    </div>
  )
}
