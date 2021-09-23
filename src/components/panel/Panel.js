import { useState } from "react";
import "../../css/Panel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faBed } from "@fortawesome/free-solid-svg-icons";

import MaterialTable from "material-table";

//import funccion de trabajo
import Read from "../../js/panel/panel.fuc";

function Panel() {
  //useState
  const [wordSpace, setWordSpace] = useState({
    display: "",
  });

  const handleChange = (e) => {
    // Guardo el objeto como un string
    Read(e.target.files[0]);
    setWordSpace({
      display: "none",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //icons
  const cubos = <FontAwesomeIcon icon={faCubes} size="6x" />;
  const sleep = <FontAwesomeIcon icon={faBed} size="6x" />;

  //const rows = [localStorage.getItem("data_set")]
  //console.log(rows);


  return (
    <div className="">
      <form
        style={{ display: `${wordSpace.display}` }}
        className="form"
        onSubmit={handleSubmit}
        encType="multipart/from-data"
      >
        <div id="photo_">
          {cubos}
          <div id="name">
            <h4>nombre usuario</h4>
          </div>
        </div>
        <div className="form_container">
          <div className="form_group">
            <input
              name="file"
              accept="xlsx, xls, cvs"
              type="file"
              className="form_input"
              id="file"
              placeholder=" "
              onChange={handleChange}
            />
            <label htmlFor="file" className="form_label">
              Subir Archivo
            </label>
          </div>

          <button className="btn" type="submit">
            {" "}
            Procesar
          </button>
        </div>
      </form>
      <div id="loading">...</div>
      <div id="wordSpace"></div>

      <MaterialTable
        style={{ fontSize: "0.8em", margin: " " }}
        title="Set de Datos"
        localization={{ header: { actions: "Acciones" } }}
      />
    </div>
  );
}

export default Panel;
