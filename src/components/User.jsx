

import "../stylesheets/user.css"

export const User = ({image, nombre, estado}) => {
  return (
    <>




      <div className="grid">


        <div className="card">
          <img className="card-img"
            src={image}
            alt="Huésped plutoniano" />
          <div className="card-body">
            <div className="card-name">Huésped plutoniano</div>
            <div className="status alive">{estado} — Extraterrestre</div>
            <div className="info-block">
              <span className="info-label">Última ubicación</span>
              <span className="info-value">Plutón</span>
            </div>
            <div className="info-block">
              <span className="info-label">Visto por primera vez en</span>
              <span className="info-value">Algo asqueroso viene por aquí</span>
            </div>
          </div>
        </div>






      </div>



    </>
  )
}