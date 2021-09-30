import { Link } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import MaterialTable from "material-table";

function Search_Labs() {
  const columns = [
    {
      title: "id",
      field: "id_",
      type: "numeric",
    },

    {
      title: "N° LINEA/ LABORATORIO ",
      field: "lab_1",
    },

    {
      title: " LABORATORIO COINCIDE",
      field: "lab_2",
    },

    {
      title: "ESTADO",
      field: "observacion",
    },
  ];

  const GET_DATA_LABS = gql`
    {
      labs {
        Descripcion_CUP
        OBSERVACION
        Descripcion_Canal
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_DATA_LABS);
  if (loading) return <p>Cargando Laboratorios...</p>;
  if (error) return `${error} `;
  //console.log(data);

  //orden de tareas
  const list_order = JSON.parse(localStorage.getItem("list_order"));
  //console.log(list_order);

  // contenido del documento a comparar
  const content_doc = JSON.parse(localStorage.getItem("row_content_file"));
  //console.log(content_doc);

  let array_labs_resultado = [];

  return (
    <div>
      {content_doc.map((val, i, arr) => {
        if (i === 0) {
        } else {
          let observacion = "";
          let lab_1 = "";
          let lab_2 = "";
          let iterador = "";

          data.labs.map((va, it, ar) => {
              if (val[list_order[2].id].includes(va.Descripcion_Canal)) {
              observacion = va.OBSERVACION;
              lab_1 = i+1 +"/"+ val[list_order[2].id];
              lab_2 = va.Descripcion_CUP;
            } else {
              lab_1 = i+1 +"/"+ val[list_order[2].id];
              iterador = i + 1;
            }
          });

          // espacio para guardar zona de influencia no encontrada
          if (!observacion) {
            observacion = " NO ENCONTRADO! ";
            // alert( `zona de influencia no localizada  ${ciudad}` )
          }

          array_labs_resultado.push({
            id_: iterador,
            observacion: observacion,
            lab_1: lab_1,
            lab_2: lab_2,
          });
        }
      })}

      {localStorage.setItem(
        "array_labs_ok",
        JSON.stringify(array_labs_resultado)
      )}

      <MaterialTable
        key={(r) => r._id}
        columns={columns}
        data={array_labs_resultado}
        style={{ fontSize: "0.7em" }}
        title="BUSCAR LABORATORIO"
        options={{ actionsColumnIndex: -1 }}
        localization={{ header: { actions: "Acciones" } }}
      />

      <Link to="/search_labs">
        {" "}
        <button>Prev... </button>
      </Link> 

      <Link to="/search_names">
        
        <button>Continuar... </button>
      </Link>
    </div>
  );
}
export default Search_Labs;
