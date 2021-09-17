import { Link } from 'react-router-dom';
import '../../css/NavBar.css'

function NavBar() {
    return (
      <div>
           <div className="container">
            <div className="card">
                <div className="box">
                    <div className="content">
                        <h2>01</h2>
                        <h3>Fichero M&eacute;dico</h3>
                        <p>Modulo dedicado al Análisis y tratamiento de la Información  <b> Fichero M&eacute;dico/Cruces Medicos</b></p>
                        <Link to="/fichero_" className="btn"> Fichero uno</Link>
                    </div>
                </div>
            </div>


            <div className="card">
                <div className="box">
                    <div className="content">
                        <h2>02</h2>
                        <h3>Fichero M&eacute;dico</h3>
                        <p>Modulo dedicado al Análisis y tratamiento de la Información  <b> Fichero M&eacute;dico/Base Progress, Pool</b></p>
                        <Link to="/fichero__" className="btn"> Fichero dos</Link>
                    </div>
                </div>
            </div>

          </div> 
      </div>
    );
  }
  
  export default NavBar;
  