import React from "react";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";


export default function File_Proccess_DB_Colombia() {
  const columns = [
    {
      title: "Nombre de Archivo",
      field: "name_1",
    },
    {
      title: "Nombre Encontrado",
      field: "name_2",
    },

    {
      title: "Espec_1",
      field: "espec_1",
    },

    {
      title: "cdg_espec1",
      field: "cdg_espec1",
    },

    {
      title: "nro_medico",
      field: "nro_medico",
    },

    {
      title: "ESTADO",
      field: "estado",
    },
  ];



  const GET_DATA_COLOMBIA = gql`
    {
      ficheroColombia{
    nro_medico
    Id_Unico
    Espec_1
    cdg_espec1
    Apeynom
  }
                 }
  `;

  const { loading, error, data } = useQuery(GET_DATA_COLOMBIA);
  if (loading) return <p>Cargando BASE COLOMBIA.</p>;
  if (error) return `${error} `;
  //console.log(data);

  //orden de tareas
  const arr_contenido = JSON.parse(localStorage.getItem("row_content_file"));
  //console.log(list_order);

  // contenido del documento a comparar
  const arr_list = JSON.parse(localStorage.getItem("list_order_file_"));
  //console.log(content_doc);


  const array_result_file = []

  return (
    <div>
 {arr_contenido.map((val, i, arr) => {
        if (i === 0) {
        } else {
          let nomArchivo = "";
          let nro_medico = "";
          let Id_Unico = "";
          let Espec_1 = "";
          let cdg_espec1 = "";
          let Apeynom = "";
          let observacion = "";

          let nom = val[arr_list[0].id];

          data.ficheroColombia.map((va, it, ar) => {

           if(nom != null && va.Apeynom != null){

              

            let if_nom =  nom.split(" ").sort().join("");
            if (if_nom.includes(va.Apeynom.split(" ").sort().join(""))){

              nomArchivo = val[arr_list[0]];
              Apeynom = va.Apeynom;
              Espec_1 = va.Espec_1;
              cdg_espec1 = va.cdg_espec1;
              Id_Unico = va.Id_Unico;

              observacion = "ENCONTRADO";

            }else{
              nomArchivo = val[arr_list[0].id];
              console.log(nom.split(" ").sort().join(""));
              observacion = "N/A"
            }
           }
            
          });

          // espacio para guardar zona de influencia no encontrada
        
          array_result_file.push({
            name_1 : nomArchivo,
            name_2 : Apeynom,
            estado : observacion,
            Espec_1 : Espec_1,
            cdg_espec1  :cdg_espec1,
            nro_medico :  Id_Unico,
          });
        }
      })}

      <MaterialTable
        key={(r) => r._id}
        columns={columns}
        data={array_result_file}
        style={{ fontSize: "0.7em" }}
        title="CRUCE COLOMBIA"
        options={{
          actionsColumnIndex: -1,
          exportButton: true,
          exportAllData: true,
        }}
        localization={{ header: { actions: "Acciones" } }}
      />
      <br />
      <Link to="/file_db_pool">
        {" "}
        <button> Seguir Comaprar Pool </button>
      </Link>
    </div>
  );
}
