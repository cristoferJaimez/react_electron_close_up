
import '../../css/ConectionStatus.css'
import { Link } from "react-router-dom";
import "../../css/SignIn.css";
import "../../css/Form.css";


function Sign_In() {



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
                  <img src="http://pa1.narvii.com/7509/63222f134a6befd896ee922a576bbe1399bd2c9br1-320-180_00.gif" alt="photo_user" />
                  <div id="name">
                    <h4>nombre usuario</h4>
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
                      Contrase&ntilde;a
                    </label>

                    <span className="form_line"></span>
                  </div>

                  <button type="submit" className="btn_">
                    Entrar
                  </button>
                </div>
              </form>
              <span className="sign">¿nuevo usuario? <Link to="/register">click aqui!</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign_In;
