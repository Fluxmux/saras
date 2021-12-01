import * as React from "react"
import "../styles/stylesheet.css"
import banner from "../images/banner.jpg"
import { Link } from "react-scroll";

const Header = () => (
  <>
    <img id="home" src={banner} alt="sara's" width="100%"/>
    <header style={{ position: "sticky", top: "0", backgroundColor: "#394d3d"}}>
      <ul>
        <li><Link to="home" spy={true} smooth={true} offset={0} duration={1000}>SARA'S</Link></li>
        <li><Link to="menu" spy={true} smooth={true} offset={-30} duration={1000}>MENU</Link></li>
        <li><Link to="contact" spy={true} smooth={true} offset={0} duration={1000}>CONTACT</Link></li>
      </ul>
    </header>
  </>
)

export default Header
