
import "./App.css"
import { User } from "./components/User"

export const App = () => {

  return (
    <>
      <div className="circle"></div>
      <p style={{fontSize: "2rem", color: "orange", textDecoration: "underline"}}>hola react</p>
      <p>hola javascript</p>
      <button>enviar</button>
      

      <h1> Tarjeta de usuario 😺</h1>
      <User  image= "./pavorico.jpeg" nombre="pavo" estado="alive" />
      <User image= "./pato_musculos.jpeg" nombre="pato" estado="dead" />
      <User image= "./ricki.jpeg" nombre="ricki" estado="dead" />

    </>
  )
}