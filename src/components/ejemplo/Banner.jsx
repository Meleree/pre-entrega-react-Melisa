import { useEffect } from "react"
import "./banner.css"

const Banner = () => {

  useEffect(()=>{

    const mostraAnchoVentana = () => {
      console.log("Ancho: ", window.innerWidth)
    }

    window.addEventListener("resize", mostraAnchoVentana)

    return () => {
      window.removeEventListener("resize", mostraAnchoVentana)
    }
  }, [])

  return (
    <div className="banner" >
      <img src="../../assets/meleree.webp" alt="" />
    </div>
  )
}
export default Banner