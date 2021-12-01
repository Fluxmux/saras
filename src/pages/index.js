import * as React from "react"

import "../styles/stylesheet.css"
import Seo from "../components/seo"
import Header from "../components/header"
import Story from "../components/story"
import Menu from "../components/menu"
import Gallery from "../components/gallery"
import Contact from "../components/contact"
import Footer from "../components/footer"
import Map from "../components/map"


const IndexPage = () => (
  <>
    <Seo title="Sara's" />
    <Header/>
    <div style={{width: "75%", margin: "0 auto"}}>
      <main>
        <Story/>
      </main>
    </div>
    <div class="parallax"/>
    <div style={{width: "75%", margin: "0 auto"}}>
      <main>
        <Menu/>
      </main>
    </div>
      <div style={{width: "75%", margin: "0 auto"}}>
          <Gallery/>
      </div>
    <div style={{width: "75%", margin: "0 auto"}}>
      <main>
        <Contact/>
      </main>
    </div>
    <Map/>
    <Footer/>
  </>
)

export default IndexPage
