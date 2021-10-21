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
  let array_nombre_list = [];
  let arr_apellidos = [];
  let arr_nom = [];

  return (
    <div>
      <h1> Organizar Nombres </h1>
      <br/>
      {content_doc.map((val, i, arr) => {
        if (i === 0) {
        } else {
          //variables
          iterador = i + 1;
          let arr_nombres = [];
          let arr_apellidos = [];
          let arr_nom = [];
          let final = [];
          let finalT = [];

          name_1 = i + 1 + "/" + val[list_order[3].id];
          observacion = "COMPLETADO!";

          arr_nombres = val[list_order[3].id].split(" ");

          arr_nombres.map((a, e, i) => {
            data.apellido.map((d, id, ad) => {
              if (d.APELLIDOS === a) {
                return arr_apellidos.push(a);
              }
            });
            let arrFilter = new Set(arr_apellidos);
            let resultado = [...arrFilter];
            final = resultado.slice(0, 2)
            
          });

          let nombresString = val[list_order[3].id];
          let nombreCortado = nombresString.replace(`${final[0]}`, "");
          let nombrefinal = nombreCortado.replace(`${final[1]}`, "");

          name_2 = final[0] + " " + final[1] + nombrefinal;

          array_names_resultado.push({
            observacion: observacion,
            id_: iterador,
            name_1: name_1.replace(/undefined/gi, ""),
            name_2: name_2.replace(/undefined/gi, ""),
          });
        }
      })}

      {localStorage.setItem(
        "array_names_ok",
        JSON.stringify(array_names_resultado)
      )}
      {}
      <MaterialTable
        key={(r) => r._id}
        columns={columns}
        data={array_names_resultado}
        style={{ fontSize: "0.7em" }}
        title="Organizar Nombres"
        options={{ actionsColumnIndex: -1 }}
        localization={{ header: { actions: "Acciones" } }}
      />
  
      <hr />
      <div className="right">
        <Link to="/search_products">
          <button className="btn"> <span className="arrow_">❰</span> Anterior</button>
        </Link>
        <Link to="/city_medic">
          <button  className="btn">Continuar <span className="arrow">❯</span></button>
        </Link>

      </div>
      <hr />
    </div>
  );
}
export default Search_Labs;
