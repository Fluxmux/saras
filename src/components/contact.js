import * as React from "react"
import "../styles/stylesheet.css"

const Contact = () => (
  <>
    <div style={{marginTop: "100px"}}>
      <h2 id="contact" style={{marginBottom: "0px"}}>Sara's</h2>
      <div style={{display: "flex"}}>
        <div style={{marginTop: "0px", width: "50%"}}>
          <p style={{marginTop: "0px"}}>
            Bogaardenstraat 24 <br></br> 3000 Leuven<br></br>
            <a href="tel:3216906389">+3216906389 </a><br></br>
            <a href="mailto:info@saras-leuven.be">info@saras-leuven.be</a>
          </p>
        </div>
        <div style={{width: "50%"}}>
          <p>
            Dinsdag tot en met vrijdag: 8u30 - 17u<br></br>
            Zaterdag: 10u30 - 17u<br></br>
            Maandag en zondag: gesloten
          </p>
        </div>
      </div>
    </div>
  </>
)

export default Contact
