import { useState, useEffect } from "react"

const ContadorEventListener = () => {
    const [ contador, setContador ] = useState(1)

    const handleClickButton = () => {
        setContador( (prevContador) => prevContador + 1 )

    }
  
    useEffect( () => {
        const botonSumar = document.getElementById("botonSumar")

        botonSumar.addEventListener("click", handleClickButton)

        return () => {
            console.log("Contador en ejecucion")
            botonSumar.removeEventListener("click", handleClickButton)
        }

    }, [] )
  
    return (
    <div>
        <p>{contador}</p>
        <button id="botonSumar"></button>
    </div>
  )
}

export default ContadorEventListener