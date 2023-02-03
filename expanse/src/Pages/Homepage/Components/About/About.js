import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import MuriousLogo from "./Assets/muriousLogo.svg";
import MurImage from "./Assets/imageMurious.png";
import ArrowVisit from "./Assets/visArr.svg";
import ExpImage from "./Assets/imageExpanse.png";
import Orn1 from "./Assets/orn1.svg";
import Orn2 from "./Assets/orn2.svg";
import Orn3 from "./Assets/orn3.svg";
import Orn4 from "./Assets/orn4.svg";

export default function About() {
  return (
    <div className="te-absection" id="about-hp">
        <div className="ab-ornaments">
            <img src={Orn1} className="orn-1"/>
            <img src={Orn2} className="orn-2"/>
            <img src={Orn3} className="orn-3"/>
            <img src={Orn4} className="orn-4"/>
        </div>
      <h1 className="ab-head">About</h1>
      <div className="ab-murious">
        <div className="ab-muleft">
          <img src={MuriousLogo} className='ab-mulogo' alt="Murious Logo" />
          <p className="ab-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            malesuada dui nunc, sed tincidunt ligula fringilla et. Donec commodo
            purus ut lacus ultrices consectetur. Nullam eros neque, lobortis nec
            interdum in, sollicitudin scelerisque ligula. In efficitur arcu
            libero,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            malesuada dui nunc, sed tincidunt ligula fringilla et. Donec commodo
            purus ut lacus ultrices consectetur. Nullam eros neque, lobortis nec
            interdum in, sollicitudin scelerisque ligula. In efficitur arcu
            libero,
          </p>
          <Link to="/" className="visit-m">
            Visit<img src={ArrowVisit}/>
          </Link>
        </div>
        <div className="ab-muright">
            <img src={MurImage} className='ab-muimg' alt="Murious Image" />
        </div>
      </div>
      <div className="ab-murious ab-expanse">
        <div className="ab-muleft">
            <h2 className="ab-expanse-head">The Expanse 2.0</h2>
            <p className="ab-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada dui nunc, sed tincidunt ligula fringilla et. Donec commodo purus ut lacus ultrices consectetur. Nullam eros neque, lobortis nec interdum in, sollicitudin scelerisque ligula. In efficitur arcu libero,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada dui nunc, sed tincidunt ligula fringilla et. Donec commodo purus ut lacus ultrices consectetur. Nullam eros neque, lobortis nec interdum in, sollicitudin scelerisque ligula. In efficitur arcu libero,
            </p>
            <Link to="/" className="visit-m reg-expanse">
                Register<img src={ArrowVisit}/>
            </Link>
        </div>
        <div className="ab-muright">
            <img src={ExpImage} className="ab-muimg" alt="Expanse Image"/>
        </div>
      </div>
    </div>
  );
}
