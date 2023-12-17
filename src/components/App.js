import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
//1. set state of on or off dark mode. attach click event to button. create handle function to set state when btn clicked.
//update button className based on state. update button text based on state
function App() {
  const[darkMode, setDarkMode] = useState(false);
  const handleClick= () =>{
    setDarkMode(darkMode =>!darkMode);
  }

  const appClass = darkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{darkMode? "Light Mode": "Dark Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
