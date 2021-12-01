import * as React from "react"
import "../styles/stylesheet.css"
import Drinks from "./drinks"
import Food from "./food"



const Menu = () => {
  const [showMenu, setMenu] = React.useState(true)
  const setDrink = () => setMenu(true)
  const setFood = () => setMenu(false)
  return (
    <>
      <h2 id="menu">Menu</h2>
      <div style={{textAlign: "center"}}>
        <input type="submit" value="DRINKS" onClick={setDrink} />
        <input type="submit" value="FOOD" onClick={setFood}/>
      </div>
      { showMenu ? <Drinks/> : <Food/> }
    </>
  )
}

export default Menu