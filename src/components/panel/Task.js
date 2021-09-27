import { validateGraphQlDocuments } from "@graphql-tools/utils";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Panel.css";
import "../../css/DataBase.css";

function Task() {
  //orden de tareas
  const list_order = JSON.parse(localStorage.getItem("row_title_file"));
  //console.log(list_order);

  //orden de tareas
  const check_list = JSON.parse(localStorage.getItem("check_task"));
  //console.log(list_order);

  // contenido del documento a comparar
  const content_doc = JSON.parse(localStorage.getItem("row_content_file"));
  //console.log(content_doc);

  return (
    <div>
      <div id="wordSpace " className="box01">
        <div className="box02">
          <form>
            <ul style={{listStyle: 'none'}}>
              {list_order.map((val, i, arr) => {
                return (
                  <li key={i}>
                    <input
                      type="checkbox"
                      id={i}
                      name={i}
                      value={val.title}
                      style={{ cursor: "pointer" }}
                    />
                    <label htmlFor={i}> {val.title} </label>
                  </li>
                );
              })}
            </ul>
          </form>
          <div className="box03"></div>
          <h3> Orden de Tareas</h3>

          <ul></ul>
          <Link
            to="/panel_products"
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
export default Task;
