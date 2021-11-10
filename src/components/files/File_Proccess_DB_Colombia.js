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
      title: "Cod_Labo",
      field: "espec_1",
    },

    {
      title: "Laboratorio",
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
      pool{
    Nombre
    Orden
    Cod_Labo
    Laboratorio
    nro_medico
    
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
           let if_nom =  nom.split(" ").sort().join("");
           

            if (if_nom.includes(va.Nombre.split(" ").sort().join(""))){

              nomArchivo = val[arr_list[0]];
              Apeynom = va.Nombre;
              Espec_1 = va.Cod_Labo;
              cdg_espec1 = va.Laboratorio;
              Id_Unico = va.nro_medico;

              observacion = "ENCONTRADO";

            }else{
              nomArchivo = val[arr_list[0].id];
              console.log(nom.split(" ").sort().join(""));
              observacion = "N/A"
            }
            
          });

          // espacio para guardar zona de influencia no encontrada
          if (!observacion) {
            observacion = " NO ENCONTRADO! ";
            // alert( `zona de influencia no localizada  ${ciudad}` )
          }

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
        title="CRUCE POOL"
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
