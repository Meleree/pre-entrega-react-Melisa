import { useState, useEffect } from "react"
import Banner from "./Banner"
import Contador from "./Contador"

const EjemploContador = () => {
  const [contador, setContador] = useState(1)
  const [toggle, setToggle] = useState(true)

  useEffect( () => {
    console.log("1er useEffect")
  }, [] )

  useEffect( () => {
    console.log("2do useEffect")
  }, [contador] )

  useEffect(()=> {
    console.log("3er useEffect")
  })

  const aumentarContador = () => {
    setContador(contador + 1)
  }

  const alternarToggle = () => {
    setToggle(!toggle)
  }

  return (
    <>
      <Contador contador={contador} aumentarContador={aumentarContador} />
      <div>
        <p>Toggle: {toggle.toString()}</p>
        <button onClick={alternarToggle} >Alternar valor</button>
        {
          toggle === true && <Banner />
        }
      </div>
    </>
  )
}
export default EjemploContador