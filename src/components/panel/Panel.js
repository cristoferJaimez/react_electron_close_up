import "../../css/Panel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes } from "@fortawesome/free-solid-svg-icons";

function Panel() {
  //icons
  const cubos = <FontAwesomeIcon icon={faCubes}  size="6x" />;
  return (
    <div className="">
      <form className="form">
        <div id="photo_">
          { cubos }
          <div id="name">
            <h4>nombre usuario</h4>
          </div>
        </div>
        <div className="form_container">
          <div className="form_group">
            <input
              type="file"
              className="form_input"
              id="file"
              placeholder=" "
            />
            <label htmlFor="file" className="form_label">
              Subir Archivo
            </label>
          </div>
          <button className="btn" type="submit"> Procesar</button>
        </div>
      </form>
    </div>
  );
}

export default Panel;
