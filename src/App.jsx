import { useState } from 'react'
import './App.css'
import Reyes from './Components/Reyes'
import Ataulfo from "./assets/reyes/rey_ataulfo.png";
import Atanagildo from "./assets/reyes/rey_atanagildo.png";
import Ervigio from "./assets/reyes/rey_ervigio.png";
import Leogivildo from "./assets/reyes/rey_leogivildo.png";
import Recesvinto from "./assets/reyes/rey_recesvinto.png";
import Sisebuto from "./assets/reyes/rey_sisebuto.png";

function App() {
  const reyes=[
    {
      nombre:"Atanagildo",
      color:"darkolivegreen",
      precio:178,
      img: Atanagildo
    },{
      nombre:"Ervigio",
      color:"crimson",
      precio:169,
      img: Ervigio
    },{
      nombre:"Ataúlfo",
      color:"peru",
      precio:81,
      img: Ataulfo
    },{
      nombre:"Leogivildo",
      color:"darkmagenta",
      precio:126,
      img: Leogivildo
    },{
      nombre:"Recesvinto",
      color:"royalblue",
      precio:141,
      img: Recesvinto
    },{
      nombre:"Sisebuto",
      color:"teal",
      precio:69,
      img: Sisebuto
    }
  ]
  const [count, setCount] = useState(0);


  return (
    <>
    <h1>Total a pagar: {count} $COP</h1>
        <div className="container">
          <Reyes reyes={reyes} setCount={setCount}/>
        </div>
    </>
  )
}

export default App
