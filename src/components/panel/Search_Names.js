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
      title: "N° LINEA/ NOMBRE DEL MEDICO ",
      field: "name_1",
    },

    {
      title: "NOMBRE ORGANIZADO",
      field: "name_2",
    },

    {
      title: "ESTADO",
      field: "observacion",
    },
  ];

  const GET_DATA_APELLIDOS = gql`
    {
      apellido {
        APELLIDOS
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_DATA_APELLIDOS);
  if (loading) return <p>Organizando nombres...</p>;
  if (error) return `${error} `;
  //orden de tareas
  const list_order = JSON.parse(localStorage.getItem("list_order"));
  //console.log(list_order);

  // contenido del documento a comparar
  const content_doc = JSON.parse(localStorage.getItem("row_content_file"));
  //console.log(content_doc);

  let array_names_resultado = [];
  let name_1 = "";
  let name_2 = "";
  let iterador = "";
  let observacion = "";
  //array

  return (
    <div>
      {content_doc.map((val, i, arr) => {
        if (i === 0) {
        } else {
          //variables
          iterador = i + 1;
          let arr_apellidos = [];
          let arr_nombres = [];
          let arr_nombre = [];

          name_1 = i + 1 + "/" + val[list_order[3].id];
          observacion = "COMPLETADO!";

          arr_nombres = val[list_order[3].id].split(" ");

          data.apellido.map((va, it, ar) => {
            arr_nombres.map((valno, ino, arrno) => {
              if (va.APELLIDOS === valno) {
                arr_apellidos.push(valno);
              } else {
                arr_nombre.push(valno);
              }
            });
          });
          name_2 =
            arr_apellidos[0] +
            " " +
            arr_apellidos[1] +
            " " +
            arr_nombre[0] +
            " " +
            arr_nombre[1];

          if (!observacion) {
            observacion = "N/A";
          }

          array_names_resultado.push({
            observacion: observacion,
            id_: iterador,
            name_1: name_1,
            name_2: name_2.replace(/ñ/gi, "#"),
          });
        }
      })}

      {localStorage.setItem(
        "array_names_ok",
        JSON.stringify(array_names_resultado)
      )}

      <MaterialTable
        key={(r) => r._id}
        columns={columns}
        data={array_names_resultado}
        style={{ fontSize: "0.7em" }}
        title="BUSCAR MEDICO"
        options={{ actionsColumnIndex: -1 }}
        localization={{ header: { actions: "Acciones" } }}
      />

      <Link to="/search_products">
        {" "}
        <button>Prev... </button>
      </Link>

      <Link to="/search_labs">
        <button>Continuar... </button>
      </Link>
    </div>
  );
}
export default Search_Labs;
