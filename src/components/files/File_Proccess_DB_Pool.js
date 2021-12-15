import React from "react";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";


export default function File_Proccess_DB_Pool() {
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
      field: "cod_Labo",
    },

    {
      title: "Laboratorio",
      field: "laboratorio",
    },

    {
      title: "nro_medico",
      field: "nro_medico",
    },
    {
      title: "Direccción",
      field: "direccion",
    },
    
    {
      title: "Matricula",
      field: "matricula",
    },
    {
      title: "Especialidad",
      field: "especialidad",
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
    Direccion
    Matricula
    Esp1
    Esp2  
  }
                 }
  `;

  const { loading, error, data } = useQuery(GET_DATA_COLOMBIA);
  if (loading) return <p>Cargando BASE POOL.</p>;
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
  const arry_arreglo_file = [];


  async function organizarDataColombia() {


    await data.pool.map((val, i, arr) => {
      arry_arreglo_colombia.push({
        name_1: val.Nombre.split(" ").sort().join("").replace("#", "Ñ")
      })
    })



    return <p>Preparando Datos...</p>

  }


  async function datosFile() {
    await arr_contenido.map((val, i, arr) => {

      let nombre_ = val[arr_list[0].id];

      arry_arreglo_file.push({
        name_2: nombre_.split(" ").sort().join("").replace("#", "Ñ")
      })

    })
  }


  organizarDataColombia();
  datosFile()


  //variable para tabla

  for (let index = 0; index < arry_arreglo_file.length; index++) {
    for (let i = 0; i < arry_arreglo_colombia.length; i++) {
      //console.log(arry_arreglo_file[index].name_2 + " " + index); 
      if (arry_arreglo_file[index].name_2 == arry_arreglo_colombia[i].name_1) {

        array_result_file.push({
          name_1 : arr_contenido[index][arr_list[0].id] ,
          name_2: data.pool[i].Nombre,
          cod_Labo: data.pool[i].Cod_Labo,
          laboratorio: data.pool[i].Laboratorio,
          orden: data.pool[i].Orden,
          direccion: data.pool[i].Direccion,
          Matricula: data.pool[i].Matricula,
          espacialidad: data.pool[i].nro_medico.Esp1,

        })

      } else {

      }
    }

  }

  //variables para tabla
  //console.log(array_result_file[100]);

  return (
    <div>
 <MaterialTable
        key={(r) => r._id}
        columns={columns}
        data={array_result_file}
        style={{ fontSize: "0.7em" }}
        title="BUSQUEDA POOL"
        options={{
          headerStyle: { background: "#6CD83D", color: "#FFF", textAlign: "center " },
          actionsColumnIndex: -1,
          exportButton: true,
          exportAllData: true,
        }}
        localization={{ header: { actions: "Acciones" } }}
      />
    </div>
     
  
  );
}
