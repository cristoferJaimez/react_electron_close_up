import { Link } from "react-router-dom";
import "../../css/Menu.css";

function Menu() {
  const btn_active = () => {
    document.querySelector("#menu-btn");
    const menu = document.querySelector("#sidemenu");

    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed");
  };

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
            <div id="name">
              <span>Panel</span>
            </div>
          </div>
        </div>

        <div id="menu-items">
          <div className="item">
            <Link to="/">
              <div className="icon">
                <img src="" alt="icon"></img>
              </div>
              <div className="title">Home</div>
            </Link>
          </div>
          <div className="item">
            <Link to="/panel">
              <div className="icon">
                <img src="" alt="icon"></img>
              </div>
              <div className="title">Panel</div>
            </Link>
          </div>
          <div className="item">
            <Link to="/check_data_base">
              <div className="icon">
                <img src="" alt="icon"></img>
              </div>
              <div className="title">Base de Datos</div>
            </Link>
          </div>

          <div className="item separator"></div>
        </div>
      </div>

      <div id="main-container"></div>
    </div>
  );
}

export default Menu;
