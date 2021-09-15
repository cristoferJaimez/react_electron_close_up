import '../../css/NavBar.css'

function NavBar() {
    return (
      <div>
           <div className="container">
            <div className="card">
                <div className="box">
                    <div className="content">
                        <h2>01</h2>
                        <h3>Fichero Uno</h3>
                        <p>Modulo dedicado al analisis y tratamiento de la Captura electronica</p>
                        <button className="btn">Fichero Uno</button>
                    </div>
                </div>
            </div>


            <div className="card">
                <div className="box">
                    <div className="content">
                        <h2>02</h2>
                        <h3>Fichero Dos</h3>
                        <p>Modulo dedicado al analisis y tratamiento de la Captura electronica</p>
                        <button className="btn">Fichero Dos</button>
                    </div>
                </div>
            </div>


            <div className="card">
                <div className="box">
                    <div className="content">
                        <h2>03</h2>
                        <h3>Panel</h3>
                        <p>Modulo dedicado al analisis y tratamiento de la Captura electronica</p>
                        <button className="btn">Panel</button>
                    </div>
                </div>
            </div>
          </div> 
      </div>
    );
  }
  
  export default NavBar;
  