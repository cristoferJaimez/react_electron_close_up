import "../../css/DataBase.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase, faEye, faCogs } from "@fortawesome/free-solid-svg-icons";


function DataBase() {
  //icons
  const db = <FontAwesomeIcon icon={faDatabase} size="7x" className="icon_" />;
  const eye = <FontAwesomeIcon icon={faEye} size="sm" />;
  const cogs = <FontAwesomeIcon icon={faCogs} size="sm" />;

  return (
    <div className="">
      <div className="container">
        <div className="card">
          <div className="box">
            <div className="content">
              <h2>01</h2>
              {db}
              <h3>Panel </h3>
              <table>
                  <tr>
                    <td>f</td>
                    <td>b</td>
                    <td>b</td>

                  </tr>
              </table>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="box">
            <div className="content">
              <h2>02</h2>
              {db}
              <h3>Fichero M&eacute;dico</h3>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataBase;
