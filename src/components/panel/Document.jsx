import React from "react";
import MaterialTable from "material-table";

export default function Document() {
  //titulo de tabla analizada

  const arr_00_tabla_analizada = JSON.parse(
    localStorage.getItem("row_title_file")
  );
  const arr_00_tabla_analizada_contenido = JSON.parse(
    localStorage.getItem("row_content_file")
  );

  //leer los datos para agrupar la tabla final
  const arr_01_ciudades = JSON.parse(localStorage.getItem("array_ciudades_ok"));
  const arr_02_productos = JSON.parse(
    localStorage.getItem("array_products_ok")
  );
  const arr_03_laboratorios = JSON.parse(localStorage.getItem("array_labs_ok"));
  const arr_04_nombres = JSON.parse(localStorage.getItem("array_names_ok"));
  const arr_05_nombres_concatenado = JSON.parse(
    localStorage.getItem("array_con_cod_name_ok")
  );
  const arr_06_buscar_nombres_01 = JSON.parse(
    localStorage.getItem("array_con_cod_name_ok")
  );
  const arr_07_buscar_nombres_02 = JSON.parse(
    localStorage.getItem("array_N_A")
  );
  let arr_contenido = [];
  let columns_title = [];
  arr_00_tabla_analizada.map((valTA, iAT, arrTA) => {
    let fila = iAT
    columns_title.push({
      title: valTA.title.toUpperCase(),
      field: fila
    });
  });


  arr_00_tabla_analizada_contenido.map((val, i, arr) => {
    if (i != 0) {
    
        arr_contenido.push(
          val
        )
      
    } else {
    }
  });

  //agrgar ciudades
  //
 let arr_contenido_ = []
 
  arr_contenido_.push(
    arr_01_ciudades,
    arr_02_productos,
    arr_03_laboratorios,
    arr_04_nombres,
    arr_05_nombres_concatenado,
    arr_06_buscar_nombres_01
  )

  columns_title.push(
    {
      title: "<<>>",
      field: "<<>>",
    },
    {
      title: "CIUDADES",
      field: "ciudades",
    },
    {
      title: "PRODUCTOS",
      field: "productos",
    },
    {
      title: "LABORATORIOS",
      field: "laboratorios",
    },
    {
      title: "NOMBRES",
      field: "nombres",
    },
    {
      title: "COD/NOMBRE",
      field: "cod_nom",
    },
    {
      title: "NOMBRE BASE COLOMBIA",
      field: "nom_base_colombia",
    },
    {
      title: "CODIGO CIUDAD BASE COLOMBIA",
      field: "nom_base_colombia",
    },
    {
      title: "COD/NOMBRE BASE COLOMBIA",
      field: "nom_base_colombia",
    }
  );

  return (
    <div style={{ marginRight: "-1900px" }}>
      <MaterialTable
        key={(r) => r._id}
        columns={columns_title}
        data={arr_contenido}
        style={{ fontSize: "0.7em" }}
        title="TABLA FINAL"
        options={{
          actionsColumnIndex: -1,
          exportButton: true,
          exportAllData: true,
        }}
        localization={{ header: { actions: "Acciones" } }}
      />
    </div>
  );
}
