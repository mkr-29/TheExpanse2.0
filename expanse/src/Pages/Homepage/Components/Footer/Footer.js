import React from 'react'
import "./Footer.css"
import JYCLogo from "./Assets/logojyc.svg"
import TMPLogo from "./Assets/logotmp.svg"
import FbIco from "./Assets/ffb.svg"
import TwIco from "./Assets/ftw.svg"
import InIco from "./Assets/fin.svg"
import { Link } from 'react-router-dom'


export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-top'>
            <img src={JYCLogo} className='logo-jyc' alt="JYC Logo"/>
            <h2 className='con-us'>Contact Us</h2>
            <img src={TMPLogo} className='logo-tmp' alt="TMP Logo"/>
        </div>
        <div className='footer-bottom'>
            <div className='fo-text'>
                <p>Jaypee University Of Information Technology</p>
                <p>Waknaghat, HP - 173234,India</p>
                <p>Phone: +91-9418838790</p>
                <p>Email: <a href="mailto:technicalclub.jyc@juitsolan.in">anthwalangimaa@gmail.com</a></p>
            </div>
            <div className='fo-socials'>
                <Link to='./https://www.instagram.com/murious.juit/'><img src={InIco} className="f-icos" alt="Instagram"/></Link>
            </div>
            <p className='fo-coop'>Copyright © Murious JUIT. All Rights Reserved</p>
        </div>
    </div>
  )
}
