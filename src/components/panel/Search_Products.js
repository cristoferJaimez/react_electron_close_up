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
    title: "N° LINEA/PRODUCTO",
    field: "ciudad",
  },

  {
    title: "ESTADO",
    field: "estado",
  },
];

function Search_Products() {
  return (
    <div>
      <MaterialTable
        columns={columns}
        style={{ fontSize: "0.7em" }}
        title="BUSCAR PRODUCTO"
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
export default Search_Products;
