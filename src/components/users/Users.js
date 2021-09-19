import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from '@material-ui/icons/Add';

import "../../css/Users.css";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import edit from "@material-ui/icons/Edit";
import delet from "@material-ui/icons/Delete";
import view from "@material-ui/icons/RemoveRedEye";

import MaterialTable from "material-table";
import "@material-ui/icons";

//consultas a la api graphql
// listar
const GET_USERS = gql`
  {
    users {
      _id
      nombres
      documento
      correo
      pw
      rol
      img
    }
  }
`;

//create users
const CREATE_USERS = gql`
  mutation createUsers($correo: String!) {
    createrPreUser(input: { correo: $correo, estado: "Activo" }) {
      _id
      correo
    }
  }
`;

function Users() {
  //modals

  //end modal

  const { loading, error, data } = useQuery(GET_USERS);
  if (loading) return <p>cargando listado de usuarios...</p>;
  if (error) return `${error} `;
  const columns = [
    {
      title: "Nombres",
      field: "nombres",
    },

    {
      title: "Num Doc.",
      field: "documento",
      type: "numeric",
    },

    {
      title: "Correo",
      field: "correo",
    },

    {
      title: "Rol",
      field: "rol",
    },

    {
      title: "Avatar",
      field: "img",
    },
  ];

  const rows = [];

  data.users.map((val, i, arr) => {
    rows.push(val);
  });

  console.log(rows);

  return (
    <div>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
     
        <Fab size="medium" color="primary" aria-label="add" style={{borderRadius: "50%"}} >
          <AddIcon />
        </Fab>
        
      </Box>

      <div className="espacio" style={{ width: "100%", display: "none" }}>
        <form className="form">
          <div className="form_container">
            <div className="form_group">
              <input
                type="email"
                id="email"
                className="form_input"
                placeholder=" "
              ></input>
              <label htmlFor="email" className="form_label">
                Crear Usuario ingresando Correo
              </label>
              <span className="form_line"></span>
            </div>
          </div>
          <input
            type="submit"
            value="Guardar"
            className="btn_"
            style={{ width: "80%", height: "20px", marginTop: "2%" }}
          ></input>
        </form>
      </div>

      <MaterialTable
        key={(r) => r._id}
        columns={columns}
        data={rows}
        style={{ fontSize: "0.8em", margin: " " }}
        title="Usuarios Tools Close Up"
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

export default Users;
