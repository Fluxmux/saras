import * as React from "react"
import "../styles/stylesheet.css"

const Drinks = () => (
  <>
    <table className="table-menu">
        <tr>
        <td style={{borderBottom: "1px dashed black", textAlign: "center"}} colspan="2"> KOFFIE </td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Americano (koffie)</td>
            <td style={{paddingRight: "25px"}}>2.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Espresso</td>
        <td style={{paddingRight: "25px"}}>2.2</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Doppio</td>
        <td style={{paddingRight: "25px"}}>3</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Espresso macchiato</td>
        <td style={{paddingRight: "25px"}}>2.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Cappucino</td>
        <td style={{paddingRight: "25px"}}>2.8</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Flat white</td>
        <td style={{paddingRight: "25px"}}>3.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Latte macchiato</td>
        <td style={{paddingRight: "25px"}}>3.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Warme melk</td>
        <td style={{paddingRight: "25px"}}>2.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Warme choco</td>
        <td style={{paddingRight: "25px"}}>3</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Iced latte</td>
        <td style={{paddingRight: "25px"}}>3</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">+ Caramel</td>
        <td style={{paddingRight: "25px"}}>0.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">+ Vanille</td>
        <td style={{paddingRight: "25px"}}>0.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">+ Soya</td>
        <td style={{paddingRight: "25px"}}>0.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">+ Slagroom</td>
        <td style={{paddingRight: "25px"}}>0.5</td>
        </tr>
        <tr>
        <td style={{borderBottom: "1px dashed black", textAlign: "center"}} colspan="2"> THEE </td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Verse gember + rooibos + citroen</td>
        <td style={{paddingRight: "25px"}}>3</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Verse munt</td>
        <td style={{paddingRight: "25px"}}>3</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Zwarte thee</td>
        <td style={{paddingRight: "25px"}}>3</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Witte thee</td>
        <td style={{paddingRight: "25px"}}>3</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Groene thee</td>
        <td style={{paddingRight: "25px"}}>3</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Witte wijn</td>
        <td style={{paddingRight: "25px"}}>4.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Rode wijn</td>
        <td style={{paddingRight: "25px"}}>4.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Rosé</td>
        <td style={{paddingRight: "25px"}}>4.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Prosecco</td>
        <td style={{paddingRight: "25px"}}>6</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Aperol</td>
        <td style={{paddingRight: "25px"}}>6</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Hugo</td>
        <td style={{paddingRight: "25px"}}>6</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Delvaux</td>
        <td style={{paddingRight: "25px"}}>3.5</td>
        </tr>
        <tr>
        <td style={{borderBottom: "1px dashed black", textAlign: "center"}} colspan="2"> FRIS </td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">San Pellegrino (klein)</td>
        <td style={{paddingRight: "25px"}}>2.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">San Pellegrino (groot)</td>
        <td style={{paddingRight: "25px"}}>4.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Bionina grapefruit</td>
        <td style={{paddingRight: "25px"}}>3.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Bionina pomegranate</td>
        <td style={{paddingRight: "25px"}}>3.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Gini munt limoen</td>
        <td style={{paddingRight: "25px"}}>3</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Elderflower (bruis/plat)</td>
        <td style={{paddingRight: "25px"}}>4.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Homemade lemonade</td>
        <td style={{paddingRight: "25px"}}>3</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Homemade iced tea</td>
        <td style={{paddingRight: "25px"}}>3</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Tonic Fever-Tree</td>
        <td style={{paddingRight: "25px"}}>3</td>
        </tr>
        <tr>
        <td style={{borderBottom: "1px dashed black", textAlign: "center"}} colspan="2"> VERS </td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Sinaasappel</td>
        <td style={{paddingRight: "25px"}}>4.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Verse pompelmoes</td>
        <td style={{paddingRight: "25px"}}>5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Wortel</td>
        <td style={{paddingRight: "25px"}}>3</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Rode biet</td>
        <td style={{paddingRight: "25px"}}>3</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Shot gember</td>
        <td style={{paddingRight: "25px"}}>1</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Smoothie</td>
        <td style={{paddingRight: "25px"}}>4.5</td>
        </tr>
        <tr className="tr-hover">
        <td style={{paddingLeft: "25px"}} className="td-menu-item">Iron man</td>
        <td style={{paddingRight: "25px"}}>3.5</td>
        </tr>
    </table>
  </>
)

export default Drinks
