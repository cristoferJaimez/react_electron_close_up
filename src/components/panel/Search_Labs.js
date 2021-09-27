import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import MaterialTable from "material-table";
import React, { useState } from "react";

const columns = [
  {
    title: "id",
    field: "id_",
    type: "numeric",
  },
  {
    title: "N° LINEA/ LABORATORIO",
    field: "ciudad",
  },

  {
    title: "ESTADO",
    field: "estado",
  },
];

function Search_Labs() {
  return (
    <div>
      <MaterialTable
        columns={columns}
        style={{ fontSize: "0.7em" }}
        title="BUSCAR LABORATORIO"
        options={{ actionsColumnIndex: -1 }}
        localization={{ header: { actions: "Acciones" } }}
      />

      <Link to="/search_labs">
        {" "}
        <button>Continuar... </button>
      </Link>
    </div>
  );
}
export default Search_Labs;