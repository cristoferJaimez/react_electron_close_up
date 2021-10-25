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
  const arr_nombres_06 = JSON.parse(localStorage.getItem("06array_name_concatenado_ok"));
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


  //ingresar arrays
  arr_contenido.map((val,i,arr) =>{

      //ciduades
      arr_01_ciudades.map((val2, i2,arr2) =>{
          if(i === i2){
              arr_contenido[i]['ciudades_']  =  val2.zonaInfluencia
              arr_contenido[i]['codigo_'] = val2.codigo
              arr_contenido[i]['cod_ciudad_'] = val2.codigo +"/"+ val2.zonaInfluencia

          }
      })

      //productos
      arr_02_productos.map((val3,i3,arr3) =>{
          if( i === i3){
            arr_contenido[i]['productos_'] = val3.producto.substr(3)
            arr_contenido[i]['des_productos_'] = val3.observacion
          }
      })


     //laboratorios
     arr_03_laboratorios.map((val4,i4,arr4) =>{
        if(i === i4){
            arr_contenido[i]['lab_'] = val4.lab_1.substr(2).replace('/', "")
            arr_contenido[i]['obs_lab_'] = val4.observacion

        }
     }) 


     //nombres desde base colombia
     arr_nombres_06.map((val6, i6,arr6)=>{
        if(i === i6){
            arr_contenido[i]['cod_nom_bas_col'] = val6.codigo_unico.substr(-20,3)+val6.nom_medico
            arr_contenido[i]['cod_nom_bas_col_cod'] = val6.codigo_unico.substr(-20,3)
            arr_contenido[i]['nom_bas_col'] = val6.nom_medico
            arr_contenido[i]['obs_bas_col'] = val6.observacion
            arr_contenido[i]['recha_bas_col'] = val6.rechazado
        }
     })

  })


  columns_title.push(
 
    {
      title: "CODIGO",
      field: "codigo_",
      cellStyle: {
        backgroundColor: '#FFC300',
        with: '1px',
        color: '#FFF'},
      headerStyle: {
        backgroundColor: '#FFC300',
      }
    },
    {
      title: "CIUDADES",
      field: "ciudades_",
      cellStyle: {
        backgroundColor: '#FFC300',
        with: '1px',
        color: '#FFF'},
      headerStyle: {
        backgroundColor: '#FFC300',
      }
    },
    {
      title: "COD+CIUDADES",
      field: "cod_ciudad_",
      cellStyle: {
        backgroundColor: '#FFC300',
        with: '1px',
        color: '#FFF'},
      headerStyle: {
        backgroundColor: '#FFC300',
      }
    },
    {
      title: "PRODUCTOS",
      field: "productos_",
      cellStyle: {
        backgroundColor: '#E13112',
        with: '1px',
        color: '#FFF'},
        headerStyle: {
          backgroundColor: '#E13112',
        }
    },
    {
      title: "DES. PRODUCTOS",
      field: "des_productos_",
      cellStyle: {
        backgroundColor: '#E13112',
        with: '1px',
        color: '#FFF'},
        headerStyle: {
          backgroundColor: '#E13112',
        }
    },
    {
      title: "LABORATORIOS",
      field: "lab_",
      cellStyle: {
        backgroundColor: '#1295E1 ',
        with: '1px',
        color: '#FFF'},
        headerStyle: {
          backgroundColor: '#1295E1 ',
        }
    },
    {
      title: "OBS. LABORATORIOS",
      field: "obs_lab_",
      cellStyle: {
        backgroundColor: '#1295E1',
        with: '1px',
        color: '#FFF'},
        headerStyle: {
          backgroundColor: '#1295E1',
        }
    },
    {
      title: "NOMBRES",
      field: "nom_bas_col",
      cellStyle: {
        backgroundColor: '#2FBD09 ',
        with: '1px',
        color: '#FFF'},
        headerStyle: {
          backgroundColor: '#2FBD09 ',
        }
    },
    {
      title: "COD/NOMBRE",
      field: "cod_nom_bas_col",
      cellStyle: {
        backgroundColor: '#2FBD09 ',
        with: '1px',
        color: '#FFF'},
        headerStyle: {
          backgroundColor: '#2FBD09 ',
        }
    },

    {
      title: "NOMBRE BASE COLOMBIA",
      field: "nom_bas_col",
      cellStyle: {
        backgroundColor: '#2FBD09 ',
        with: '1px',
        color: '#FFF'},
        headerStyle: {
          backgroundColor: '#2FBD09 ',
        }
    },
    {
      title: "CODIGO CIUDAD BASE COLOMBIA",
      field: "cod_nom_bas_col_cod",
      cellStyle: {
        backgroundColor: '#2FBD09 ',
        with: '1px',
        color: '#FFF'},
        headerStyle: {
          backgroundColor: '#2FBD09 ',
        }
    },
    {
      title: "COD/NOMBRE BASE COLOMBIA",
      field: "cod_nom_bas_col",
      cellStyle: {
        backgroundColor: '#2FBD09 ',
        with: '1px',
        color: '#FFF'},
        headerStyle: {
          backgroundColor: '#2FBD09 ',
        }
    },
    {
      title: "OBSERVACION",
      field: "obs_bas_col",
      cellStyle: {
        backgroundColor: '#2FBD09 ',
        with: '1px',
        color: '#FFF'},
        headerStyle: {
          backgroundColor: '#2FBD09 ',
        }
    },
    {
      title: "RECHAZADO",
      field: "recha_bas_col",
      cellStyle: {
        backgroundColor: '#2FBD09 ',
        with: '1px',
        color: '#FFF'},
        headerStyle: {
          backgroundColor: '#2FBD09 ',
        }
    }
  );  


  return (
    <div style={{  marginRight: "-6500px" }}>
      <MaterialTable
        key={(r) => r._id}
        columns={columns_title}
        data={ arr_contenido}
        style={{ fontSize: "0.7em" }}
        title="TABLA FINAL"
        options={{
          actionsColumnIndex: -1,
          exportButton: true,
          exportAllData: true,
          headerStyle :{ background : "#000000", color: "#FFF" }

        }}
        localization={{ header: { actions: "Acciones" } }}
      />
    </div>
  );
}
