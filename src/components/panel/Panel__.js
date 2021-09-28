import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import MaterialTable from "material-table";


function Panel__() {
  //
  // listar
  const GET_DATA_BASE_COLOMBIA = gql`
    {
      zonaInfluencia {
        DEPARTAMENTO
        REGION
        ZONAS_DE_INFLUENCIA
        COD_CIUD
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_DATA_BASE_COLOMBIA);
  if (loading) return <p>Cargando Zona de Influencia...</p>;
  if (error) return `${error} `;

  const columns = [
    {
      title: "id",
      field: "id_",
      type: "numeric",
    },
    {
      title: "N° LINEA/CIUDAD",
      field: "ciudad",
    },

    {
      title: "ZONA DE INFLUENCIA",
      field: "zonaInfluencia",
    },

    {
      title: "DEPARTAMENTO",
      field: "result",
    },
    {
      title: "CODIGO ASIGNADO",
      field: "codigo",
    },
  ];

  //orden de tareas
  const list_order = JSON.parse(localStorage.getItem("list_order"));
  //console.log(list_order);

  // contenido del documento a comparar
  const content_doc = JSON.parse(localStorage.getItem("row_content_file"));
  //console.log(content_doc);

  //seleccionar celda de ciudad
  //console.log("id: ", list_order[0].id);

  localStorage.setItem('check_task', JSON.stringify({
      id:list_order[0].id,
      task:list_order[0].task,
      stated: "complet"
  }))


  let array_ciudad_resultado = [];
  return (
    <div>
      {content_doc.map((val, i, arr) => {
        if (i === 0) {
        } else {
          let ciudad = "";
          let zonaInfluencia = "";
          let result = "";
          let iterador = "";
          let codigo = "";
          // console.log(val[list_order[0].id]);
          data.zonaInfluencia.map((va, it, ar) => {
            if (va.ZONAS_DE_INFLUENCIA === val[list_order[0].id]) {
              //console.log("coincide");
              ciudad = i+1 + "/" + val[list_order[0].id];
              iterador = val[3];
              zonaInfluencia = va.ZONAS_DE_INFLUENCIA;
              result = va.DEPARTAMENTO;
              codigo = va.COD_CIUD;
            } else {
              ciudad = i+1 + "/" + val[list_order[0].id];
              iterador = i +1;
            }
          });

          // espacio para guardar zona de influencia no encontrada
          if(!zonaInfluencia){ zonaInfluencia = " NO ENCONTRADA! "
           // alert( `zona de influencia no localizada  ${ciudad}` )
        }
        if(codigo.length === 1){
            codigo = `0${codigo}`
        }

          array_ciudad_resultado.push({
            id_: iterador,
            ciudad: ciudad,
            zonaInfluencia: zonaInfluencia,
            result: result,
            codigo: codigo,
          });
        }
      })}

      {localStorage.setItem(
        "array_ciudades_ok",
        JSON.stringify(array_ciudad_resultado)
      )}

      <MaterialTable
        key={(r) => r._id}
        columns={columns}
        data={array_ciudad_resultado}
        style={{ fontSize: "0.7em" }}
        title="Codigo de Ciudades"
       
        options={{ actionsColumnIndex: -1 }}
        localization={{ header: { actions: "Acciones" } }}
      />
     <Link to="/search_products"> <button>Continuar...  </button></Link>
    </div>
  );
}
export default Panel__;
