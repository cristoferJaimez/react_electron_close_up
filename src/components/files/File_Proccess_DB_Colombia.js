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
      field: "apeNom",
    },
    {
      title: "Localidad",
      field: "localidad",
    },
    {
      title: "Barrio",
      field: "barrio",
    },
    {
      title: "Direccion",
      field: "direccion",
    },

    {
      title: "Matricula",
      field: "matricula",
    },
    {
      title: "Fecha Alta",
      field: "fechaAlta",
    },

    {
      title: "Espec_1",
      field: "Espec_1",
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
      title: "ACTIVO",
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
    Cdg_ciudad
    Activo
    Direccion1
    Barrio_Municipio1
    Localidad_Colonia1
    Matricula1
    Fecha_Alta
    PxTamTGT
    EstadoGralMedico
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
  const arry_arreglo_file = [];


  async function organizarDataColombia() {


    await data.ficheroColombia.map((val, i, arr) => {
      arry_arreglo_colombia.push({
        name_1: val.Apeynom.split(" ").sort().join("").replace("#", "Ñ")
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
          name_1: arr_contenido[index][arr_list[0].id],
          apeNom: data.ficheroColombia[i].Apeynom,
          localidad: data.ficheroColombia[i].Localidad_Colonia1,
          barrio: data.ficheroColombia[i].Barrio_Municipio1,
          direccion: data.ficheroColombia[i].Direccion1,
          matricula: data.ficheroColombia[i].Matricula1,
          fechaAlta: data.ficheroColombia[i].Fecha_Alta,
          idu: data.ficheroColombia[i].Id_Unico,
          Espec_1: data.ficheroColombia[i].Espec_1,
          cdg_espec1: data.ficheroColombia[i].cdg_espec1,
          nro_medico: data.ficheroColombia[i].nro_medico,
          estado : data.ficheroColombia[i].EstadoGralMedico
        })

      } else {

      }
    }

  }

  //variables para tabla
  //console.log(array_result_file[100]);


  return (
    <div style={{  marginRight: "-800px" }}>
    
      <MaterialTable
        key={(r) => r._id}
        columns={columns}
        data={array_result_file}
        style={{ fontSize: "0.7em" }}
        title="BUSQUEDA BASE COLOMBIA"
        options={{
          headerStyle: { background: "#ff8d00", color: "#FFF", textAlign: "center " },
          actionsColumnIndex: -1,
          exportButton: true,
          exportAllData: true,
        }}
        localization={{ header: { actions: "Acciones" } }}
      />
      <br></br>
      <Link
        to="/File_DB_Pool"
        style={{
          textDecoration: "none",
          border: "solid 1px #000",
          padding: "0.2em",
        }}
      >
        Cruzar con Pool
      </Link>


    </div>
  );
}