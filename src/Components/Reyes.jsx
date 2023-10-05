import React, {useRef} from 'react'

function Reyes({reyes, setCount}) {

    const comprarCena = (precio, referencia) => {
       setCount(e => e + precio);
       referencia.current.style.display= "none"
      }
  return (
    <>
        {
            reyes.map((rey, i)=>{
                const referencia = useRef()
                return(
                <div ref={referencia} className='card' style={{backgroundColor:rey.color}} key={i}>
                    <p>{rey.nombre}</p>
                    <img src={rey.img} alt={rey.monbre} />
                    <div className='precio'>
                        <p>Precio {rey.precio} $COP</p>
                        <button onClick={() => comprarCena(rey.precio, referencia)}>Comprar</button>
                    </div>
                </div>
            )})
        }
    </>
  )
}

export default Reyes