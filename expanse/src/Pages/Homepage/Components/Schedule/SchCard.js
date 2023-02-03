import React from 'react'
import "./SchCard.css"
export default function SchCard(parse) {
  return (
    <div className='sc-card'>
        <div className='sc-time'>
            {parse.stime} - {parse.etime}
        </div>
        <h3 className='sc-ename'>{parse.ename}</h3>
    </div>
  )
}
