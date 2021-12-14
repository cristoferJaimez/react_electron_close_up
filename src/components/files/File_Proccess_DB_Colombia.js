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

  //console.log("cruzando datos!!");

  const arry_arreglo_colombia = [];

  async function organizarDataColombia(){
    await data.ficheroColombia.map((val,i,arr) =>{
        arry_arreglo_colombia.push({
          name_1 : val.Apeynom.split(" ").sort().join("").replace("#", "Ñ")
        })
    })

  }

  organizarDataColombia();

  arry_arreglo_colombia.map((val, i, arr) =>{
      console.log(val.name_1.split("").sort().join("")); 
  });

  return (
<div>

</div>
  );
}