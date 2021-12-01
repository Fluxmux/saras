import * as React from "react"
import "../styles/stylesheet.css"
import "animate.css/animate.min.css";
import breakfast from "../images/breakfast.jpg"
import coffee from "../images/coffee.jpg"
import front from "../images/front.jpg"
import garden from "../images/garden.jpg"
import lunch from "../images/lunch.jpg"
import woman from "../images/woman.jpg"


const Gallery = () => (
  <>
    <div className="gallery-grid">
      <img src={breakfast} alt="breakfast" className="gallery-img1"/>
      <img src={coffee} alt="coffee" className="gallery-img2"/>
      <img src={front} alt="front" className="gallery-img3"/>
      <img src={garden} alt="garden" className="gallery-img4"/>
      <img src={lunch} alt="lunch" className="gallery-img5"/>
      <img src={woman} alt="woman" className="gallery-img6"/>
    </div>
  </>
)

export default Gallery