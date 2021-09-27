import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/DataBase.css";
import "../../css/Panel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faBed } from "@fortawesome/free-solid-svg-icons";
//import funccion de trabajo
import Read from "../../js/panel/panel.fuc";

function Panel() {
  //variable
  var order_process = [];
  const [wordSpace, setWordSpace] = useState({
    display: "",
  });

  const [arr, setArr] = useState({
    name: "",
    stated: "",
  });

  const [order, setOrder] = useState({
    name: "Orden de Tareas:   ",
    newArr: <h3>Esperando Orden</h3>,
  });

  const handleChange = async (e) => {
    // Guardo el objeto como un string
    Read(e.target.files[0]);
    setWordSpace({
      display: "none",
    });
    setArr({
      stated: <h3 id="loading">Espere un momento por favor...</h3>,
    });
    setTimeout(load_localStorage, 5000);
    // cargar ingo local storage
  };

  const load_localStorage = () => {
    var arr = localStorage.getItem("row_title_file");
    var name_sheet = localStorage.getItem("sheet_name");
    arr = JSON.parse(arr);
    if (!arr) {
      load_localStorage();
      setArr({
        stated: <h3 id="loading">ya casi termino...</h3>,
      });
    } else {
      setArr({
        name: "Nombre del Archivo:   " + name_sheet,
        stated: arr.map((val, i, arr) => {
          return (
            <li key={i}>
              <input
                type="checkbox"
                onClick={list_process}
                id={i}
                name={i}
                value={val.title} 
                style={{ cursor: "pointer" }}
              />
              <label htmlFor={i}> {val.title} </label>
            </li>
          );
        }),
      });
    }
  };



  const list_process = (e) => {
    var che = document.getElementById(e.target.id).checked;
    if (che === true) {
      order_process.push({
        task: e.target.value,
        id: e.target.id,
      });
      localStorage.setItem("list_order", JSON.stringify(order_process));
      var getOrder = localStorage.getItem("list_order");
      var getList = localStorage.getItem("row_title_file");
      getList = JSON.parse(getList);
      getOrder = JSON.parse(getOrder);
      setOrder({
        newArr: getOrder.map((val, i, arr) => {
          return (
            <li key={i}>
              <label htmlFor={i} style={{ cursor: "pointer" }}>
                <b>{val.task}</b>
              </label>
            </li>
          );
        }),
      });
    } else if (che === false) {
      let valor = "";
      console.log(valor);
      order_process.splice(
        {
          task: e.target.value,
          id: e.target.id,
        },
        1
      );
      localStorage.setItem("list_order", JSON.stringify(order_process));
      var getOrder = localStorage.getItem("list_order");
      var getList = localStorage.getItem("row_title_file");
      getList = JSON.parse(getList);
      getOrder = JSON.parse(getOrder);
      setOrder({
        newArr: getOrder.map((val, i, arr) => {
          return (
            <li key={i}>
              <label htmlFor={i} style={{ cursor: "pointer" }}>
                <b> {val.task}</b>
              </label>
            </li>
          );
        }),
      });
    }
  };

  //icons
  const cubos = <FontAwesomeIcon icon={faCubes} size="6x" />;
  const sleep = <FontAwesomeIcon icon={faBed} size="6x" />;

  
  return (
    <div className="">
      <form
        style={{ display: `${wordSpace.display}` }}
        className="form"
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
        </div>
      </form>
      <div id="loading">...</div>
      <div id="wordSpace " className="box01">
        <div className="box02">
          <h3> {arr.name}</h3>
          <form>
            <ul style={{ listStyle: "none" }}>{arr.stated}</ul>
          </form>
        </div>
        <div className="box03">
          <h3> Orden de Tareas</h3>

          <ul>{order.newArr}</ul>
          <Link
            to="/panel__"
            style={{
              textDecoration: "none",
              border: "solid 1px #000",
              padding: "0.2em",
            }}
          >
            procesar...
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Panel;
