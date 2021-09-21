import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@material-ui/icons/Add";

import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import edit from "@material-ui/icons/Edit"; 
import delet from "@material-ui/icons/Delete";
import view from "@material-ui/icons/RemoveRedEye";

import MaterialTable from "material-table";
import "@material-ui/icons";

//consultas a la api graphql
// listar
const GET_DATA_BASE_COLOMBIA = gql`
  {
    zonaInfluencia {
      _id
      COD_CIUD
      REGION
      DEPARTAMENTO
      ZONAS_DE_INFLUENCIA
      CIUD_ZONA
    }
  }
`;

function DataBaseZona() {
  //modals

  //end modal

  const { loading, error, data } = useQuery(GET_DATA_BASE_COLOMBIA);
  if (loading) return <p>Cargando Zona de Influencia...</p>;
  if (error) return `${error} `;



  const columns = [
    {
      title: "Codigo de Ciudad",
      field: "COD_CIUD",
      type: "numeric",

    },
    {
      title: "Region",
      field: "REGION",
    },

    {
      title: "Departamento",
      field: "DEPARTAMENTO",
    },

    {
      title: "Zonas de  Influencias",
      field: "ZONAS_DE_INFLUENCIA",
    },
    {
        title: "Ciudad Zona",
        field: "CIUD_ZONA",
      },
  ];

  const rows = [];

  data.zonaInfluencia.map((val, i, arr) => {
    rows.push(val);
  });

  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab
          size="medium"
          color="primary"
          aria-label="add"
          style={{ borderRadius: "50%" }}
        >
          <AddIcon />
        </Fab>
      </Box>

      <MaterialTable
        key={(r) => r._id}
        columns={columns}
        data={rows}
        style={{ fontSize: "0.7em" }}
        title="Zona de Influencia"
        actions={[
          { icon: view, tooltip: "Ver Columna", onClick: (e, rowData) => {} },
          { icon: edit, tooltip: "Editar", onClick: (e, rowData) => {} },
          { icon: delet, tooltip: "Eliminar", onClick: (e, rowData) => {} },
        ]}
        options={{ actionsColumnIndex: -1 }}
        localization={{ header: { actions: "Acciones" } }}
      />
    </div>
  );
}

export default DataBaseZona;
