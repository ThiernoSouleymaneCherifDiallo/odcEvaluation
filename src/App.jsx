import { useEffect, useState } from "react";
import Home from "./composant/home.jsx"
import FormComposant from "./composant/FormComposant.jsx";

function App() {

  const [state, setState] = useState(false);
  
  useEffect (()=>{
   setTimeout(() => {
    if (state) {document.title = "quelque chose"}
    else {document.title = "bonjour"}
   }, 5000);
  })
  const toggle=()=>{
    setState(!state);
  }
  const [nbr, setnbr] = useState(0)
  function handlerplus(){
    return (setnbr(nbr+1), console.log("on incremente"))
  }

  function handlermoins(){
    return (setnbr(nbr-1))
  }

  
 

  return (
    <>      
        <div>
          <button onClick={toggle}>Toggle Comprenent</button>
          {state? "afficher le composant": "composant cacher"}
        </div>   

        <div>
          <h3>{nbr}</h3>
          <button onClick={handlerplus}>+</button>
          <button onClick={handlermoins}>-</button>
        </div>
        <FormComposant></FormComposant>


    </>

  )
}

export default App
