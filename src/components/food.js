import * as React from "react"
import "../styles/stylesheet.css"

const Food = () => (
  <>
    <table className="table-menu">
        <tr>
        <td style={{borderBottom: "1px dashed black", textAlign: "center"}} colspan="2"> ONTBIJT </td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Croissant</td>
        <td style={{paddingRight: "25px"}}>4.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Boterhammen met choco</td>
        <td style={{paddingRight: "25px"}}>5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Pannekoeken</td>
        <td style={{paddingRight: "25px"}}>3</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Spek met eiren</td>
        <td style={{paddingRight: "25px"}}>3</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">English breakfast</td>
        <td style={{paddingRight: "25px"}}>1</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">American breakfast</td>
        <td style={{paddingRight: "25px"}}>4.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Cornflakes</td>
        <td style={{paddingRight: "25px"}}>3.5</td>
        </tr>
    </table>
  </>
)

export default Food
