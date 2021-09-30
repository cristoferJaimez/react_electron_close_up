import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faDatabase, faCubes, faArchive, faCogs, faSignOutAlt, faUsersCog, faUsers } from '@fortawesome/free-solid-svg-icons'
import "../../css/Menu.css";

function Menu() {
  const btn_active = () => {
    document.querySelector("#menu-btn");
    const menu = document.querySelector("#sidemenu");

    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed");
  };

 //icons
  const home =  <FontAwesomeIcon icon={faHome} size="sm" />
  const db =  <FontAwesomeIcon icon={faDatabase}  size="sm" />
  const panel =  <FontAwesomeIcon icon={faCubes} size="sm"  />
  const fichero_ =  <FontAwesomeIcon icon={faArchive} size="sm"  />
  const cogs =  <FontAwesomeIcon icon={faCogs} />
  const sign_out =  <FontAwesomeIcon icon={faSignOutAlt} size="sm" />
  const userCog =  <FontAwesomeIcon icon={faUsersCog} size="sm" />
  const users =  <FontAwesomeIcon icon={faUsers} size="sm" />




 //end icons

  return (
    <div className="">
      <div id="sidemenu" className="menu-collapsed">
        <div id="header" className="">
        
          <div id="menu-btn" onClick={btn_active}>
            <div className="btn-hamburger"></div>
            <div className="btn-hamburger"></div>
            <div className="btn-hamburger"></div>
          </div>
          <div id="title">
            <span></span>
          </div>
        </div>

        <div id="profile">
          <div id="photo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Circle-icons-tools.svg" alt="photo_user" />
            <div id="name">
              <h4>nombre usuario</h4>
            </div>
          </div>
        </div>

        <div id="menu-items">
          <div className="item">
           {/*  <Link to="/">
              <div className="icon">
              {home}
              </div>
              <div className="title">Home</div>
            </Link> */}
          </div>
          <div className="item">
            <Link to="/fichero_">
              <div className="icon">
                { fichero_ }
              </div>
              <div className="title">Fichero M&eacute;dico</div>
            </Link>
          </div>

         
          
          <div className="item">
            <Link to="/panel">
              <div className="icon">
                { panel }
              </div>
              <div className="title">Panel</div>
            </Link>
          </div>

          <div className="item">
            <Link to="/database">
              <div className="icon">
                { db }
              </div>
              <div className="title">Base de Datos</div>
            </Link>
          </div>

          <span className=" item separator"></span>
          <div className="item">
            {/* <Link to="/check_data_base">
              <div className="icon">
                { cogs }
              </div>
              <div className="title">Configuraciones</div>
            </Link> */}
          </div>

          <span className=" item separator"></span>
          <div className="item">
           {/*  <Link to="/check_data_base">
              <div className="icon">
                { userCog }
              </div>
              <div className="title">Config. del usuario</div>
            </Link> */}
          </div>

          <span className=" item separator"></span>
          <div className="item">
          {/*   <Link to="/users">
              <div className="icon">
                { users }
              </div>
              <div className="title">Usuarios</div>
            </Link> */}
          </div>

       

          <div className="item_separator"></div>

          <div className="item">
            {/* <Link to="/check_data_base">
              <div className="icon">
                { sign_out }
              </div>
              <div className="title">Salir</div>
            </Link> */}
          </div>


        </div>
      </div>

      <div id="main-container"></div>
    </div>
  );
}

export default Menu;
