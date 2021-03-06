
import '../../css/ConectionStatus.css'
import { Link } from "react-router-dom";
import "../../css/SignIn.css";
import "../../css/Form.css";


function Register() {



  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              <h2>Up</h2>
              <h3>Close</h3>
              <form className="form">
                <div id="photo_">
                  <img src="https://www.close-upinternational.mx/img/logo-header.png" alt="photo_user" />
                  <div id="name">
                    <h4>Nuevo Usuario</h4>
                  </div>
                </div>
                <div className="form_container">
                  <div className="form_group">
                    <input
                      type="email"
                      id="email"
                      className="form_input"
                      placeholder=" "
                    ></input>
                    <label htmlFor="email" className="form_label">
                      ejemplo@closeUp.com.co
                    </label>

                    <span className="form_line"></span>
                  </div>

                  <div className="form_group">
                    <input
                      type="password"
                      id="pw"
                      className="form_input"
                      placeholder=" "
                    ></input>
                    <label htmlFor="pw" className="form_label">
                     crear contrase&ntilde;a
                    </label>

                    <span className="form_line"></span>
                  </div>

                  <button type="submit" className="btn_">
                    Registar
                  </button>
                </div>
              </form>
              <span><Link to="/" className="sign">iniciar sesion!</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
