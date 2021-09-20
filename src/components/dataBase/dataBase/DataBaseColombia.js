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
    colombia {
      _id
      Nombre_del_Medico_CA
      Matricula1_CI
      ESTADO_CAO
      ID_de_Medico_Unico_CAD
    }
  }
`;

function DataBaseColombia() {
  //modals

  //end modal

  const { loading, error, data,  } = useQuery(GET_DATA_BASE_COLOMBIA);
  if (loading)
    return (
      <p>
        Cargando Super Maestro Colombia...{}
      </p>
    );
  if (error) return `${error} `;

  console.log(data);

  const columns = [
    {
        title: "ID de Medico Unico",
        field: "ID_de_Medico_Unico_CAD",
      },
    {
      title: "Matricula1",
      field: "Matricula1_CI",
      type: "numeric",
    },

    {
      title: "Nombre del Medico",
      field: "Nombre_del_Medico_CA",
    },

    {
      title: "Estado",
      field: "ESTADO_CAO",
    },
  ];

  const rows = [];

  data.colombia.map((val, i, arr) => {
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
        title="Super Maestro Colombia"
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

export default DataBaseColombia;
