import React from "react";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";


export default function File_Proccess_DB_Colombia() {
  const columns = [
    {
      title: "id",
      field: "id_",
      type: "numeric",
    },

    {
      title: "N° LINEA/ NOMBRE DEL MEDICO ",
      field: "name_1",
    },

    {
      title: "NOMBRE A COMPARAR",
      field: "name_2",
    },

    {
      title: "ESTADO",
      field: "estado",
    },
  ];

  //orden de tareas
  const arr_contenido = JSON.parse(localStorage.getItem("row_content_file"));
  //console.log(list_order);

  // contenido del documento a comparar
  const arr_list = JSON.parse(localStorage.getItem("list_order_file_"));
  //console.log(content_doc);


  const  array_result_file = []

  return (
    <div>

    {
            arr_contenido.map((val, i,arr) => {
                



            })

    }




      <MaterialTable
        key={(r) => r._id}
        columns={columns}
        data={array_result_file}
        style={{ fontSize: "0.7em" }}
        title="CRUCE BASE COLOMBIA"
        options={{
          actionsColumnIndex: -1,
          exportButton: true,
          exportAllData: true,
        }}
        localization={{ header: { actions: "Acciones" } }}
      />
      <br />
      <Link to="/fichero_">
        {" "}
        <button> Seguir Comaprar Pool </button>
      </Link>
    </div>
  );
}
